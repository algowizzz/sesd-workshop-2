import { Command } from "commander";
import axios from "axios";
import chalk from "chalk";

export class AdviceCommand {
    register(program: Command) {
        program
            .command("advice")
            .description("Get random advice")
            .action(async () => {
                try {
                    const response = await axios.get("https://api.adviceslip.com/advice")
                    const advice = response.data.slip.advice
                    console.log(chalk.green(`Advice: ${advice}`))
                } catch {
                    console.log(chalk.red("Failed to fetch advice"))
                }
            })
    }
}
