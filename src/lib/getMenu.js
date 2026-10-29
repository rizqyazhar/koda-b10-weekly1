import { getData } from "./getData.js";

const menu = await getData();

export async function menuMakanan() {
  const { pizza, pasta, other, appetizer, extraSauce } = menu.makanan;

  const arrayMakanan = [
    ...pizza,
    ...pasta,
    ...other,
    ...appetizer,
    ...extraSauce,
  ];

  return arrayMakanan;
}

export async function menuMinuman() {
  const arrayMinuman = [...menu.minuman];
  return arrayMinuman;
}

console.log(await menuMakanan());
console.log(await menuMinuman());
