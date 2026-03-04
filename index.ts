import { CLIEngine } from "./core/CLIEngine";
import { GreetCommand } from "./commands/GreetCommand";
import { AddCommand } from "./commands/AddCommand";
import { SubtractCommand } from "./commands/SubtractCommand";
import { MultiplyCommand } from "./commands/MultiplyCommand";
import { DivideCommand } from "./commands/DivideCommand";
import { WeatherCommand } from "./commands/WeatherCommand";
import { GithubCommand } from "./commands/GithubCommand";
import { QuoteCommand } from "./commands/QuoteCommand";
import { TimeCommand } from "./commands/TimeCommand";
import { FileInfoCommand } from "./commands/FileInfoCommand";
import { AdviceCommand } from "./commands/AdviceCommand";

const engine = new CLIEngine();

engine.registerCommands([
    GreetCommand,
    AddCommand,
    SubtractCommand,
    MultiplyCommand,
    DivideCommand,
    WeatherCommand,
    GithubCommand,
    QuoteCommand,
    TimeCommand,
    FileInfoCommand,
    AdviceCommand
]);

engine.run();
