import cpy from 'cpy';

import { listThemes } from './list';

import { compileTheme } from './preview';
import { Arguments, Argv } from 'yargs';
import { defaultThemeName, deleteRef, dirs } from '../../lib/themes';
import { info } from '../../lib/messaging';
import { buildPath } from '../../lib/dirs';

interface EjectArgs {
	theme: string;
}

// yargs exports
export const command = 'eject [theme]';
export const describe = 'Eject a built theme ready for deployment';
export const builder = (yargs: Argv) => {
	yargs.positional('theme', {
		default: defaultThemeName,
		describe:
			'the name of the theme to eject (this is only needed if there is more than one theme in the workspace)',
		type: 'string',
	});
};
export const handler = eject;

// internals
async function eject(argv: Arguments<EjectArgs>): Promise<void> {
	const availableThemes = await listThemes();

	if (availableThemes.length === 0) {
		info('no available themes to eject, use the create command to create a theme');
		process.exit(1);
	}

	if (!argv.theme && availableThemes.length > 1) {
		info(
			`there is more than one theme to preview: ${availableThemes}. Please use the --theme flag to specify a theme to preview`,
		);
		process.exit(1);
	}

	const themeName = argv.theme ?? availableThemes[0];
	const ejectedThemeDir = buildPath(`<cwd>/${themeName}`, dirs);

	await compileTheme(themeName, `${ejectedThemeDir}`);

	await cpy(buildPath('<base>/**/*', dirs), ejectedThemeDir, {
		cwd: buildPath('<cwd>/<workspace>', dirs),
		parents: true,
	});

	await deleteRef(themeName);

	info('theme ejected successfully');
}
