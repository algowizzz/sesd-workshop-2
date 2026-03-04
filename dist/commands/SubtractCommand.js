"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubtractCommand = void 0;
class SubtractCommand {
    register(program) {
        program
            .command("subtract <num1> <num2>")
            .description("Subtract two numbers")
            .action((num1, num2) => {
            const result = Number(num1) - Number(num2);
            console.log(`${num1} - ${num2} = ${result}`);
        });
    }
}
exports.SubtractCommand = SubtractCommand;
