import { Command } from "commander";

export class CLIEngine {
    program: Command
    constructor() {
        this.program = new Command();
        this.program
            .name("mycli")
            .description("CLI Tool built with Node and TypeScript")
            .version("1.0.0")
    }

    registerCommands(commands: any[]) {
        commands.forEach(CommandClass => {
            const commandInstance = new CommandClass()
            commandInstance.register(this.program)
        })
    }
    run() {
        this.program.parse(process.argv)
    }
}
