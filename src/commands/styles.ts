import { Argv } from 'yargs';

// yargs exports
export const command = 'styles <subcommand>';
export const describe = 'Run subcommands to work with a custom CSS theme';
export const builder = (yargs: Argv) => {
	/* eslint-disable @typescript-eslint/no-var-requires */
	return yargs
		.command(require('./styles/create'))
		.command(require('./styles/preview'))
		.command(require('./styles/eject'))
		.command(require('./styles/list'))
		.command(require('./styles/clean'))
		.command(require('./styles/scaffold'))
		.demandCommand();
	/* eslint-enable @typescript-eslint/no-var-requires */
};
export const handler = noop;

// internals
function noop() {}
