import { Command } from "commander";

export class DivideCommand {
    register(program: Command) {
        program
            .command("divide <num1> <num2>")
            .description("Divide two numbers")
            .action((num1: string, num2: string) => {
                const result = Number(num1) / Number(num2)
                console.log(`${num1} / ${num2} = ${result}`)
            })
    }
}
