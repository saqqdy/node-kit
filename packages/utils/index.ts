import { realpath, realpathSync } from 'fs'

/**
 * resolve realpath
 *
 * @param path - the path
 * @returns result - the realpath
 */
export async function getRealPath(path: string) {
	return new Promise<string>(resolve => {
		// We need to resolve the real native path for case-insensitive file systems.
		// For example, we can access file as C:\Code\Project as well as c:\code\projects
		// Without this we can face a problem when try to install packages with -w flag,
		// when root dir is using c:\code\projects but packages were found by C:\Code\Project
		realpath.native(path, function (err, resolvedPath) {
			resolve(err !== null ? path : resolvedPath)
		})
	})
}

/**
 * resolve realpath sync function
 *
 * @param path - the path
 * @returns result - the realpath
 */
export function getRealPathSync(path: string) {
	return realpathSync.native(path)
}
