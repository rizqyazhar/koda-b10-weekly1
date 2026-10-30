import {writeFile} from "node:fs/promises"; 
import path from "node:path";
import { getData } from "./getData.js";

export async function recordHistory(history) {
  try {
    const fileName = "history.txt";
    const filePath = path.join(process.cwd(), fileName);
    
    const getDataHistory = await getData(fileName);
    const newHistory = [...getDataHistory || [], ...history];

    const content = JSON.stringify(newHistory, null, 2);
    await writeFile(filePath, content, "utf8");
  } catch (err) {
    console.error(err.message);
  }
}