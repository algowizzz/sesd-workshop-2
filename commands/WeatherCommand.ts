import { Command } from "commander";
import axios from "axios";
import chalk from "chalk";

export class WeatherCommand {
    register(program: Command) {
        program
            .command("weather <city>")
            .description("Get weather information")
            .action(async (city: string) => {
                try {
                    const apiKey = "21e913bd42f242aab12181627260403";
                    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
                    const response = await axios.get(url)
                    const data = response.data
                    console.log(chalk.blue(`City: ${data.name}`))
                    console.log(chalk.green(`Temperature: ${data.main.temp}°C`))
                    console.log(chalk.yellow(`Weather: ${data.weather[0].description}`))
                } catch (error: any) {
                    if (error.response && error.response.status === 401) {
                        console.log(chalk.red("Invalid API Key"))
                    } 
                    else if (error.response && error.response.status === 404) {
                        console.log(chalk.red("City not found"))
                    } 
                    else {
                        console.log(chalk.red("Failed to fetch weather data"))
                    }
                }
            })
    }
}
