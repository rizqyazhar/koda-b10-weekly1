import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

export async function askQuestion(query) {
  try {
    const rl = readline.createInterface({
      input,
      output,
    });
    const answer = await rl.question(`\n<<PizzaBoxx>> ${query}\n`);
    rl.close();
    return answer;
  } catch {
    console.log("Sepertinya ada yang salah...");
  }
}

export function showMessage(m) {
  console.log(`${"=".repeat(30)}`);
  console.log(m);
  console.log(`${"=".repeat(30)}`);
}

export function showRoute(r) {
  console.log("");
  for (const [key, value] of Object.entries(r)) {
    console.log(`${key}: ${value}`);
  }
  console.log("");
}

export function showMenu(menu, title) {
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
}

export function checkout(data) {
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

export async function inputPesanan(menu, titleTable) {
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

export function historyObject(isi) {
  const date = new Date();
  return {
    pesanan: isi,
    waktuPesan: date
  };
}

export function handleExit() {
  console.log("Terima Kasih...");

  const rl = readline.createInterface({
    input,
    output,
  });
  return rl.close();
}

export function printHistory(history){
  console.log("");
  console.log("Riwayat Pemesanan");
  console.log("");
  for (const item of history) {
    const getTime = item.waktuPesan.toLocaleString().split(",");
    console.log(`(${getTime[0]}) - ${getTime[1]}`);
    console.log("-------------------------------");
    item.pesanan.map((element) => {
      console.log(
        `${element.quantity.toString().padEnd(2, " ")}x ${element.name.padEnd(30, " ")} ${element.price.toLocaleString("id-ID")}`,
      );
    });
    console.log("");
  }
}