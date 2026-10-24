const menu = {
  makanan: {
    pizza: [
      {
        id: "pz01",
        name: "Spicy Tuna Pizza",
        price: 64000,
      },
      {
        id: "pz02",
        name: "Hot Cheese Pizza",
        price: 64000,
      },
      {
        id: "pz03",
        name: "Sausage Mania Pizza",
        price: 64000,
      },
      {
        id: "pz04",
        name: "Beef Mushroom Pizza",
        price: 64000,
      },
      {
        id: "pz05",
        name: "Beef Pepperoni Pizza",
        price: 64000,
      },
      {
        id: "pz06",
        name: "Pepperoni Cheese Pizza",
        price: 64000,
      },
      {
        id: "pz07",
        name: "Meet Mania Pizza",
        price: 62000,
      },
      {
        id: "pz08",
        name: "Special Mania Pizza",
        price: 62000,
      },
      {
        id: "pz09",
        name: "Black Pepper Pizza",
        price: 62000,
      },
      {
        id: "pz010",
        name: "Spicy Bbq Pizza",
        price: 62000,
      },
      {
        id: "pz011",
        name: "Spicy Crispy Chicken",
        price: 62000,
      },
      {
        id: "pz012",
        name: "Truffle Mushroom Pizza",
        price: 62000,
      },
      {
        id: "pz013",
        name: "Meat Island Pizza",
        price: 62000,
      },
      {
        id: "pz014",
        name: "Hawaiian Pizza",
        price: 62000,
      },
      {
        id: "pz015",
        name: "Smoked Beef Mania",
        price: 62000,
      },
      {
        id: "pz016",
        name: "Cheesy Royal Pizza",
        price: 64000,
      },
      {
        id: "pz017",
        name: "Cheesy Basic Pizza",
        price: 64000,
      },
    ],
    pasta: [
      {
        id: "pf01",
        name: "Fettucine Beef",
        price: 35000,
      },
      {
        id: "pf02",
        name: "Fettucine Cheese",
        price: 35000,
      },
      {
        id: "pf03",
        name: "Fettucine Creamy Bolognese",
        price: 35000,
      },
      {
        id: "pf04",
        name: "Fettucine Black Pep Beef",
        price: 35000,
      },
      {
        id: "pf05",
        name: "Fettucine Spicy Smoke",
        price: 35000,
      },
    ],
    other: [
      {
        id: "po01",
        name: "Beef Lasagna",
        price: 44000,
      },
      {
        id: "po02",
        name: "Mash Potato Bolognese",
        price: 36500,
      },
    ],
    appetizer: [
      {
        id: "ap01",
        name: "Chicken Ball 5 Pcs",
        price: 14000,
      },
      {
        id: "ap02",
        name: "Chicken Ball 10 Pcs",
        price: 25000,
      },
      {
        id: "ap03",
        name: "Beef Sosis Cocktail 5 Pcs",
        price: 15000,
      },
      {
        id: "ap04",
        name: "Beef Sosis Cocktail 10 Pcs",
        price: 29000,
      },
      {
        id: "ap05",
        name: "Chicken Wings 3 Pcs",
        price: 18000,
      },
      {
        id: "ap06",
        name: "Chicken Wings 6 Pcs",
        price: 35000,
      },
      {
        id: "ap07",
        name: "Garlic Bread",
        price: 15000,
      },
      {
        id: "ap08",
        name: "Garlic Cheese Bread",
        price: 22000,
      },
      {
        id: "ap09",
        name: "Potato Wedges",
        price: 22000,
      },
      {
        id: "ap010",
        name: "Wings Double",
        price: 28000,
      },
      {
        id: "ap011",
        name: "Chicken Stick 10 Pcs",
        price: 23000,
      },
      {
        id: "ap012",
        name: "Beef Bockwurst Single",
        price: 14000,
      },
      {
        id: "ap013",
        name: "Beef Bockwurst Double",
        price: 27000,
      },
      {
        id: "ap014",
        name: "Beef Bockwurst Triple",
        price: 39000,
      },
    ],
    extraSauce: [
      {
        id: "es01",
        name: "Cheese Sauce",
        price: 6000,
      },
      {
        id: "es02",
        name: "Bbq Sauce",
        price: 5000,
      },
      {
        id: "es03",
        name: "Spicy Bbq Sauce",
        price: 5000,
      },
      {
        id: "es04",
        name: "Chili Sachet (1 Pcs)",
        price: 750,
      },
    ],
  },
  minuman: [
    {
      id: "mn01",
      name: "Prima",
      price: 6000,
    },
    {
      id: "mn02",
      name: "Tebs",
      price: 8000,
    },
    {
      id: "mn03",
      name: "Teh Botol Sosro",
      price: 8000,
    },
    {
      id: "mn04",
      name: "Ice Lemon Tea",
      price: 10000,
    },
    {
      id: "mn05",
      name: "Green Tea Latte",
      price: 19000,
    },
  ],
};

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
