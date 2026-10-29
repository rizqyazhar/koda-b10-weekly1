import fs from "node:fs/promises";
import path from "node:path";

export async function getData() {
  const filePath = path.join(process.cwd(), "db.txt");
  try {
    const data = await fs.readFile(filePath, {
      encoding: "utf8",
    });

    const result = await JSON.parse(data);

    return result;
  } catch (err) {
    console.error(err.message);
  }
}
