import { Command } from "commander";
import fs from "fs";

export class FileInfoCommand {
    register(program: Command) {
        program
            .command("fileinfo <filename>")
            .description("Display file information")
            .action((filename: string) => {
                const stats = fs.statSync(filename)
                console.log(`File Size: ${stats.size} bytes`)
                console.log(`Created: ${stats.birthtime}`)
                console.log(`Last Modified: ${stats.mtime}`)
            })
    }
}
