"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeCommand = void 0;
class TimeCommand {
    register(program) {
        program
            .command("time")
            .description("Show current system time")
            .action(() => {
            const time = new Date().toLocaleTimeString();
            console.log(`Current Time: ${time}`);
        });
    }
}
exports.TimeCommand = TimeCommand;
