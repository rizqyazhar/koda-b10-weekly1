import { getData } from "./src/lib/getData.js";
import { menuMakanan, menuMinuman } from "./src/lib/getMenu.js";
import {askQuestion,
  inputPesanan,
  historyObject,
  checkout,
  showMessage,
  showRoute,
  handleExit,
  printHistory,} from "./src/lib/helper.js";
import { recordHistory } from "./src/lib/recordHistory.js";

const mainRoute = {
  1: "Menu",
  2: "Riwayat Pesanan",
  3: "Exit",
};

const makanan = await menuMakanan();
const minuman = await menuMinuman();

async function main() {
  let running = true;
  let pesanan = [];
  let history = [];

  while (running) {
    showMessage("Selamat Datang di PizzaBoxx");
    showRoute(mainRoute);
    const askMenu = await askQuestion("Ada yang bisa dibantu? ");
    console.log(askMenu);
    const input = askMenu.trim();
    switch (input) {
      case "1":
        {
          const pesananMakanan = await inputPesanan(makanan, "Makanan");
          pesanan = [...pesanan, ...pesananMakanan];
          const pesananMinuman = await inputPesanan(minuman, "Minuman");
          pesanan = [...pesanan, ...pesananMinuman];
          const addHistory = historyObject(pesanan);

          history = [...history, addHistory];
          checkout(pesanan);
          pesanan = [];
        }
        break;
      case "2":
        if (history.length === 0) {
          console.log("Belom ada riwayat pemesanan");
        } else {
          recordHistory(history);
          const getDataHistory = await getData("history.txt");
          printHistory(await getDataHistory);
        }
        break;
      case "3":
        running = false;
        handleExit();
        break;
      default:
        console.log("Maaf belom ada menu tersebut");
    }
    if (running) {
      const pesanLagi = await askQuestion("Mau pesan lagi? (y/n) ");
      if (pesanLagi.toLowerCase() === "n") {
        running = false;
        handleExit();
      }
    }
  }
}

main();
