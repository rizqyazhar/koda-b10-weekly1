import {
  askQuestion,
  inputPesanan,
  historyObject,
  checkout,
  showMessage,
  showRoute,
} from "./src/lib/helper.js";

const mainRoute = {
  1: "Menu",
  2: "Riwayat Pesanan",
  3: "Exit",
};

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
