import { getData } from "./getData";

export async function menuMakanan() {
  const getMenu = await getData();

  const { pizza, pasta, other, appetizer, extraSauce } = getMenu.makanan;

  const arrayMakanan = [
    ...pizza,
    ...pasta,
    ...other,
    ...appetizer,
    ...extraSauce,
  ];

  return arrayMakanan;
}
