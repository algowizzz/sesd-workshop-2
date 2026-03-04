"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLIEngine = void 0;
const commander_1 = require("commander");
class CLIEngine {
    constructor() {
        this.program = new commander_1.Command();
        this.program
            .name("mycli")
            .description("CLI Tool built with Node and TypeScript")
            .version("1.0.0");
    }
    registerCommands(commands) {
        commands.forEach(CommandClass => {
            const commandInstance = new CommandClass();
            commandInstance.register(this.program);
        });
    }
    run() {
        this.program.parse(process.argv);
    }
}
exports.CLIEngine = CLIEngine;
