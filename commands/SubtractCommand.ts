import { Command } from "commander";

export class SubtractCommand {
    register(program: Command) {
        program
            .command("subtract <num1> <num2>")
            .description("Subtract two numbers")
            .action((num1: string, num2: string) => {
                const result = Number(num1) - Number(num2)
                console.log(`${num1} - ${num2} = ${result}`)
            })
    }
}
