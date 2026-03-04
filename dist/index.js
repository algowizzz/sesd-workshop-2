"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CLIEngine_1 = require("./core/CLIEngine");
const GreetCommand_1 = require("./commands/GreetCommand");
const AddCommand_1 = require("./commands/AddCommand");
const SubtractCommand_1 = require("./commands/SubtractCommand");
const MultiplyCommand_1 = require("./commands/MultiplyCommand");
const DivideCommand_1 = require("./commands/DivideCommand");
const WeatherCommand_1 = require("./commands/WeatherCommand");
const GithubCommand_1 = require("./commands/GithubCommand");
const QuoteCommand_1 = require("./commands/QuoteCommand");
const TimeCommand_1 = require("./commands/TimeCommand");
const FileInfoCommand_1 = require("./commands/FileInfoCommand");
const AdviceCommand_1 = require("./commands/AdviceCommand");
const engine = new CLIEngine_1.CLIEngine();
engine.registerCommands([
    GreetCommand_1.GreetCommand,
    AddCommand_1.AddCommand,
    SubtractCommand_1.SubtractCommand,
    MultiplyCommand_1.MultiplyCommand,
    DivideCommand_1.DivideCommand,
    WeatherCommand_1.WeatherCommand,
    GithubCommand_1.GithubCommand,
    QuoteCommand_1.QuoteCommand,
    TimeCommand_1.TimeCommand,
    FileInfoCommand_1.FileInfoCommand,
    AdviceCommand_1.AdviceCommand
]);
engine.run();
