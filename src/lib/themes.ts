import { promises as fs } from 'fs';
import { exists } from './dirs';
import { deleteFileOrDir } from './cleanup';

export const dirs = {
	dirname: __dirname,
	cwd: process.cwd(),
	base: 'base',
	examples: 'examples',
	nodeModules: `${__dirname}/../../node_modules`,
	preview: 'preview',
	themes: 'arcgis-js-api/assets/esri/themes',
	workspace: '.arcgis-js-cli-styles',
};

const mainStyleSheetName = 'main';
export const mainCss = `${mainStyleSheetName}.css`;
export const mainScss = `${mainStyleSheetName}.scss`;
export const defaultThemeName = 'my-custom-theme';

const internalThemeToken = '.theme.';
const internalThemeNamePattern = new RegExp(`^\\${internalThemeToken}`);

export function toExternalName(internalThemeName: string): string {
	return internalThemeName.replace(internalThemeNamePattern, '');
}

export function toInternalName(externalThemeName: string): string {
	return `${internalThemeToken}${externalThemeName}`;
}

export function isInternalTheme(themeName: string): boolean {
	return internalThemeNamePattern.test(themeName);
}

export async function hasRef(themeName: string): Promise<boolean> {
	const workspacePath = `${dirs.cwd}/${dirs.workspace}`;
	const themeRefPath = `${workspacePath}/${toInternalName(themeName)}`;
	return exists(themeRefPath);
}

export async function createRef(themeName: string): Promise<void> {
	const workspacePath = `${dirs.cwd}/${dirs.workspace}`;
	const themeRefPath = `${workspacePath}/${toInternalName(themeName)}`;
	return fs.writeFile(themeRefPath, '');
}

export async function deleteRef(themeName: string): Promise<void> {
	const workspacePath = `${dirs.cwd}/${dirs.workspace}`;
	const themeRefPath = `${workspacePath}/${toInternalName(themeName)}`;
	return deleteFileOrDir(themeRefPath);
}
