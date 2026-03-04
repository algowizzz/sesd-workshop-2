import { Command } from "commander";
import axios from "axios";
import chalk from "chalk";

export class GithubCommand {
    register(program: Command) {
        program
            .command("github <username>")
            .description("Fetch GitHub user information")
            .action(async (username: string) => {
                const response = await axios.get(`https://api.github.com/users/${username}`)
                const user = response.data
                console.log(chalk.green(`Name: ${user.name}`))
                console.log(chalk.blue(`Public Repositories: ${user.public_repos}`))
                console.log(chalk.yellow(`Followers: ${user.followers}`))
            })
    }
}
