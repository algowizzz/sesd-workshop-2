import { Command } from "commander";
import chalk from "chalk";

export class GreetCommand {
    register(program: Command) {
        program
            .command("greet <name>")
            .description("Greets the user")
            .action((name: string) => {
                console.log(chalk.green(`Hello ${name}, welcome to the CLI tool!`))
            })
    }
}
