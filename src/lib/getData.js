import fs from "node:fs/promises";
import path from "node:path";

export async function getData(fileName) {
  const filePath = path.join(process.cwd(), fileName);
  try {
    const data = await fs.readFile(filePath, {
      encoding: "utf8",
    });

    if (!data.trim()) {
      return null;
    }

    const result = JSON.parse(data);

    return result;
  } catch (err) {
    console.error(err.message);
  }
}
