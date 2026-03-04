"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCommand = void 0;
class AddCommand {
    register(program) {
        program
            .command("add <num1> <num2>")
            .description("Add two numbers")
            .action((num1, num2) => {
            const result = Number(num1) + Number(num2);
            console.log(`${num1} + ${num2} = ${result}`);
        });
    }
}
exports.AddCommand = AddCommand;
