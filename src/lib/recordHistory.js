import {writeFile} from "node:fs/promises"; 
import path from "node:path";

export async function recordHistory(history) {
  const filePath = path.join(process.cwd(), "history.txt");

  const content = JSON.stringify(history, null, 2);
  await writeFile(filePath, content, "utf8");
}