import { Arguments } from 'yargs';
import cpy from 'cpy';
import { debug, log } from '../../lib/messaging';
import { dirs, mainScss } from '../../lib/themes';
import { buildPath, exists } from '../../lib/dirs';

interface ScaffoldArgs {
	force: boolean;
}

// yargs exports
export const command = 'scaffold';
export const describe =
	'Sets up project scaffolding. This is done automatically when creating a theme for the first time.';
export const builder = {
	force: {
		alias: 'f',
		describe: 'forces creation of project scaffolding',
		type: 'boolean',
	},
};
export const handler = async (argv: Arguments<ScaffoldArgs>): Promise<void> => {
	const workspacePath = buildPath(`<cwd>/<workspace>/`, dirs);
	await scaffold(workspacePath, argv.force);
};

// utils
export async function scaffold(workspacePath: string, force = false): Promise<void> {
	const workspaceExists = await exists(workspacePath);

	if (workspaceExists) {
		if (!force) {
			log('workspace exists, will not scaffold. If you wish to overwrite, use the --force flag.');
			return;
		}
	}

	const themesPath = buildPath('<nodeModules>/<themes>', dirs);

	const copyOptions = {
		cwd: themesPath,
		expandDirectories: true,
		overwrite: true,
		parents: true,
	};

	debug(`copying base`);

	await cpy('**/*', buildPath(`${workspacePath}/<base>`, dirs), {
		...copyOptions,
		cwd: buildPath(`${themesPath}/<base>`, dirs),
	});

	debug(`copying examples`);

	await cpy([`**/${mainScss}`, `!${dirs.base}/*.*`], buildPath(`${workspacePath}/<examples>`, dirs), copyOptions);

	debug(`copying preview file`);

	await cpy('preview/', buildPath(`${workspacePath}/<preview>`, dirs), {
		cwd: buildPath(`<dirname>/../../`, dirs),
	});

	log(`project scaffolding complete`);
}
