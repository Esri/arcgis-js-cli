import { promises as fs } from 'fs';

export async function deleteFileOrDir(fileOrDirPath: string): Promise<void> {
	return fs.rm(fileOrDirPath, { force: true, recursive: true });
}
