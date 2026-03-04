"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileInfoCommand = void 0;
const fs_1 = __importDefault(require("fs"));
class FileInfoCommand {
    register(program) {
        program
            .command("fileinfo <filename>")
            .description("Display file information")
            .action((filename) => {
            const stats = fs_1.default.statSync(filename);
            console.log(`File Size: ${stats.size} bytes`);
            console.log(`Created: ${stats.birthtime}`);
            console.log(`Last Modified: ${stats.mtime}`);
        });
    }
}
exports.FileInfoCommand = FileInfoCommand;
