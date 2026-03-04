"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherCommand = void 0;
const axios_1 = __importDefault(require("axios"));
const chalk_1 = __importDefault(require("chalk"));
class WeatherCommand {
    register(program) {
        program
            .command("weather <city>")
            .description("Get weather information")
            .action((city) => __awaiter(this, void 0, void 0, function* () {
            try {
                const apiKey = "e8b2c8e9eb640acd6478ce49bf788a7a";
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
                const response = yield axios_1.default.get(url);
                const data = response.data;
                console.log(chalk_1.default.blue(`City: ${data.name}`));
                console.log(chalk_1.default.green(`Temperature: ${data.main.temp}°C`));
                console.log(chalk_1.default.yellow(`Weather: ${data.weather[0].description}`));
            }
            catch (error) {
                if (error.response && error.response.status === 401) {
                    console.log(chalk_1.default.red("Invalid API Key"));
                }
                else if (error.response && error.response.status === 404) {
                    console.log(chalk_1.default.red("City not found"));
                }
                else {
                    console.log(chalk_1.default.red("Failed to fetch weather data"));
                }
            }
        }));
    }
}
exports.WeatherCommand = WeatherCommand;
