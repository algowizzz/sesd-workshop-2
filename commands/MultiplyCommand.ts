import { Command } from "commander";

export class MultiplyCommand {
    register(program: Command) {
        program
            .command("multiply <num1> <num2>")
            .description("Multiply two numbers")
            .action((num1: string, num2: string) => {
                const result = Number(num1) * Number(num2)
                console.log(`${num1} * ${num2} = ${result}`)
            })
    }
}
