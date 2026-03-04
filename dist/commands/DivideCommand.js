"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DivideCommand = void 0;
class DivideCommand {
    register(program) {
        program
            .command("divide <num1> <num2>")
            .description("Divide two numbers")
            .action((num1, num2) => {
            const result = Number(num1) / Number(num2);
            console.log(`${num1} / ${num2} = ${result}`);
        });
    }
}
exports.DivideCommand = DivideCommand;
