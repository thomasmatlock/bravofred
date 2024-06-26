import fs from 'fs';
import chalk from 'chalk';

export default async function copyFile(source: string, target: string) {
	try {
		return await fs.copyFileSync(source, target);
		// console.log(chalk.blue(`Copied ${source}`));
	} catch (error) {
		console.log(chalk.red(`Error copying ${source} to ${target}`));
	}
}
