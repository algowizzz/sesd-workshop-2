"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GreetCommand = void 0;
const chalk_1 = __importDefault(require("chalk"));
class GreetCommand {
    register(program) {
        program
            .command("greet <name>")
            .description("Greets the user")
            .action((name) => {
            console.log(chalk_1.default.green(`Hello ${name}, welcome to the CLI tool!`));
        });
    }
}
exports.GreetCommand = GreetCommand;
