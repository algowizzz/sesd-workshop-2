import { Command } from "commander";
import axios from "axios";
import chalk from "chalk";

export class QuoteCommand {
    register(program: Command) {
        program
            .command("quote")
            .description("Fetch a random quote")
            .action(async () => {
                const response = await axios.get("https://zenquotes.io/api/random")
                const quote = response.data[0]
                console.log(chalk.green(`"${quote.q}"`))
                console.log(chalk.yellow(`- ${quote.a}`))
            })
    }
}
