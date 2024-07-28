import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import ora from "ora";
import chalk from "chalk";

import { setTimeout } from "timers/promises";
import axios from "axios";
import { exec } from "node:child_process";

const rl = readline.createInterface({ input, output });
import util from "node:util"

const processRunner = util.promisify(exec);

const spinner = ora("   Sara is Thinking 🧠");
async function bard(params) {
  const answer = await rl.question(chalk.gray("❖    YOU:\n     "));
  spinner.start();
  let res;
  if (answer.split(" ")[0] == "exec") {
    console.log(answer.split(" ").slice(1, answer.split(" ").length).join(" "));
    const { stdout, stderr, error } = await processRunner(answer.split(" ").slice(1, answer.split(" ").length).join(" "));
    res = stdout;

    // exec("dir",(e,sout,sin)=>{
    //   console.log(sout);
    // })
  } else {
    res = await bardService(answer);
  }
  spinner.stop();

  console.log(chalk.greenBright(`❖    SARA:`));
  console.log(`     ${res}`);
  console.log("");
  console.log("");
  bard();
}

async function bardService(message) {
  const res = await axios.post("http://localhost:3000/bard/chat", {
    message: message,
  });
  if (res.status == 200) {
    return res.data.data[0] ?? "Unknown Error Occured";
  }
  await setTimeout(2000);
  return "Hey Dumb, Can't you work on your own?";
  // axios.post()
}

export default bard;
