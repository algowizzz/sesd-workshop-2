import { Command } from "commander";

export class TimeCommand {
    register(program: Command) {
        program
            .command("time")
            .description("Show current system time")
            .action(() => {
                const time = new Date().toLocaleTimeString()
                console.log(`Current Time: ${time}`)
            })
    }
}
