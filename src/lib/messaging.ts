import chalk from "chalk";

export const warn = function (...args: unknown[]): void {
	console.warn(chalk.yellow(...args));
};
export const log = function (...args: unknown[]): void {
	console.log(chalk.blue(...args));
};
export const info = function (...args: unknown[]): void {
	console.info(chalk.white(...args));
};
export const debug = function (...args: unknown[]): void {
	console.debug(chalk.gray(...args));
};
export const error = function (...args: unknown[]): void {
	console.error(chalk.red(...args));
};
