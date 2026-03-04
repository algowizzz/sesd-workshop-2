import { Command } from "commander";

export class AddCommand {
    register(program: Command) {
        program
            .command("add <num1> <num2>")
            .description("Add two numbers")
            .action((num1: string, num2: string) => {
                const result = Number(num1) + Number(num2)
                console.log(`${num1} + ${num2} = ${result}`)
            })
    }
}
