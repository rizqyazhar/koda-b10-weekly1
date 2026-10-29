import fs from "node:fs/promises";

export async function getData() {
  try {
    const data = await fs.readFile(
      "/Users/asus/desktop/bootcamp/koda-b10-weekly1/db.txt",
      {
        encoding: "utf8",
      },
    );

    const result = await JSON.parse(data);

    return result;
  } catch (err) {
    console.error(err.message);
  }
}
