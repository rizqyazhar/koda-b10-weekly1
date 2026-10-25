const mainRoute = {
  1: "Menu",
  2: "Riwayat Pesanan",
  3: "Exit",
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  // prompt: "PizzaBoxx> ",
});

const showMessage = (m) => {
  console.log(`${"=".repeat(30)}`);
  console.log(m);
  console.log(`${"=".repeat(30)}`);
};

const showRoute = (r) => {
  console.log("");
  for (const [key, value] of Object.entries(r)) {
    console.log(`${key}: ${value}`);
  }
  console.log("");
};

const { pizza, pasta, other, appetizer, extraSauce } = menu.makanan;

const menuMakanan = [...pizza, ...pasta, ...other, ...appetizer, ...extraSauce];

const menuMinuman = [...menu.minuman];

const showMenu = (menu, title) => {
  console.log("");
  const judulLine = `${title} ${" ".repeat(20)} | Harga ${" ".repeat(12)} | Kode`;
  console.log(judulLine);
  console.log(`${"-".repeat(60)}`);
  let menuLine = "";
  for (let i = 0; i < menu.length; i++) {
    menuLine += `${menu[i].name.padEnd(30, " ")} ${menu[i].price
      .toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
      })
      .padEnd(20, " ")} ${menu[i].id}`;
    console.log(menuLine);
    menuLine = "";
  }
  console.log("");
};

function askQuestion(query) {
  return new Promise((resolve) => {
    rl.question(query, resolve);
  });
}

function checkout(data) {
  console.log("");
  console.log(`${"=".repeat(30)} Checkout ${"=".repeat(30)}`);
  console.log("");
  let cetak = "";
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    const hitungTotal = data[i].quantity * data[i].price;
    total += hitungTotal;
    cetak += `${data[i].name.padEnd(30, " ")} ${data[i].quantity.toString().padStart(3, " ")}x   ${data[
      i
    ].price
      .toLocaleString("id-ID")
      .padEnd(
        20,
        " ",
      )} ${hitungTotal.toLocaleString("id-ID").padStart(10, " ")}`;
    console.log(cetak);
    cetak = "";
  }
  console.log("");
  console.log("_".repeat(70));
  console.log("");
  console.log(
    `Total  ${total
      .toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
      })
      .padStart(62, " ")}`,
  );
  console.log("");
}

async function inputPesanan(menu, titleTable) {
  showMenu(menu, titleTable);
  let askMenu = await askQuestion(
    `Mau ${titleTable.slice(0, 5).toLowerCase()} apa? (Masukkan kode) `,
  );
  const pesananMenu = menu.filter((m) => m.id === askMenu);
  if (pesananMenu.length === 0) {
    console.log("Masukkan kode yang benar... ");
    askMenu = await askQuestion(
      `Mau ${titleTable.slice(0, 5).toLowerCase()} apa? (Masukkan kode) `,
    );
  }

  const askQuantity = await askQuestion("Mau berapa banyak? ");

  pesananMenu[0].quantity = Number(askQuantity);

  return pesananMenu;
}

function historyObject(isi) {
  return {
    pesanan: isi,
    waktuPesan: function () {
      const date = new Date();
      const getTime = date.toLocaleString().split(",");
      return [getTime[0], getTime[1]];
    },
  };
}

async function main() {
  let running = true;
  let pesanan = [];
  let history = [];

  while (running) {
    showMessage("Selamat Datang di PizzaBoxx");
    showRoute(mainRoute);
    const askMenu = await askQuestion("Ada yang bisa dibantu? ");
    const input = askMenu.trim();
    switch (input) {
      case "1":
        const pesananMakanan = await inputPesanan(menuMakanan, "Makanan");
        pesanan = [...pesanan, ...pesananMakanan];
        const pesananMinuman = await inputPesanan(menuMinuman, "Minuman");
        pesanan = [...pesanan, ...pesananMinuman];
        const addHistory = historyObject(pesanan);

        history = [...history, addHistory];
        checkout(pesanan);
        pesanan = [];
        break;
      case "2":
        if (history.length === 0) {
          console.log("Belom ada riwayat pemesanan");
        } else {
          console.log("");
          console.log("Riwayat Pemesanan");
          console.log("");
          for (const item of history) {
            console.log(`(${item.waktuPesan()[0]}) - ${item.waktuPesan()[1]}`);
            console.log("-------------------------------");
            item.pesanan.map((element) => {
              console.log(
                `${element.quantity.toString().padEnd(2, " ")}x ${element.name.padEnd(30, " ")} ${element.price.toLocaleString("id-ID")}`,
              );
            });
            console.log("");
          }
        }

        break;
      case "3":
        running = false;
        break;
      default:
        console.log("Maaf belom ada menu tersebut");
    }
    if (running) {
      const pesanLagi = await askQuestion("Mau pesan lagi? (y/n) ");
      if (pesanLagi.toLowerCase() === "n") {
        running = false;
      }
    }
  }
}

const handleExit = () => {
  console.log("Terima Kasih...");
  return rl.close();
};

main().finally(() => handleExit());
