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
