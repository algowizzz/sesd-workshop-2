"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiplyCommand = void 0;
class MultiplyCommand {
    register(program) {
        program
            .command("multiply <num1> <num2>")
            .description("Multiply two numbers")
            .action((num1, num2) => {
            const result = Number(num1) * Number(num2);
            console.log(`${num1} * ${num2} = ${result}`);
        });
    }
}
exports.MultiplyCommand = MultiplyCommand;
