import { promises as fs, Stats } from 'fs';
import { normalize } from 'path';

export function buildPath(path: string, dirKeyToPath: Record<string, string>): string {
	for (const [key, dir] of Object.entries(dirKeyToPath)) {
		path = path.replace(`<${key}>`, dir);
	}

	return normalize(path);
}

export async function ensureDir(dir: string): Promise<void> {
	try {
		await fs.mkdir(dir, { recursive: true });
	} catch (e) {
		// noop dir exists
	}
}

async function getStats(dirOrFile: string): Promise<Stats | undefined> {
	let stats;

	try {
		stats = await fs.stat(dirOrFile);
	} catch (e) {
		// noop dir exists
	}

	return stats;
}

export async function exists(dirOrFile: string): Promise<boolean> {
	return !!(await getStats(dirOrFile));
}
