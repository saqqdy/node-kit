import { basename, join } from 'path'
import {
	type PathLike,
	type RmDirOptions,
	constants,
	copyFileSync,
	existsSync,
	lstatSync,
	mkdirSync,
	promises,
	readdirSync
} from 'fs'
// import fg from 'fast-glob'

export interface CpOptions extends RmDirOptions {
	force?: boolean
}

/**
 * copy file
 *
 * @param paths - path or file, support array
 * @param target - target path
 */
export async function cp(
	paths: PathLike | PathLike[],
	target: PathLike,
	options?: CpOptions
): Promise<void> {
	if (!(paths instanceof Array)) paths = ([] as PathLike[]).concat(paths)
	// paths = await fg(paths as string[], {
	// 	cwd: process.cwd(),
	// 	ignore: [],
	// 	onlyDirectories: true,
	// 	onlyFiles: true
	// })

	if (!existsSync(target)) await promises.mkdir(target)

	for (const path of paths) {
		// typeof path === 'string' && !isAbsolute(path) && (path = join(process.cwd(), path))
		if (!existsSync(path)) {
			console.info(`[NOT_EXIST]: "${path} or ${target}" does not exist`)
			continue
		}
		// get stat
		const stat = await promises.lstat(path)
		if (stat.isFile()) {
			target = join(target as string, basename(path as string))
			await promises.copyFile(path, target, constants.COPYFILE_FICLONE)
			continue
		}

		// get files
		const files = await promises.readdir(path)
		await Promise.all(
			files.map(name => {
				const _stat = lstatSync(join(path as string, name))
				return cp(
					join(path as string, name),
					_stat.isDirectory() ? join(target as string, name) : target,
					options
				)
			})
		)
	}
}

/**
 * copy file sync
 *
 * @param paths - path or file, support array
 * @param target - target path
 */
export function cpSync(paths: PathLike | PathLike[], target: PathLike, options?: CpOptions): void {
	if (!(paths instanceof Array)) paths = ([] as PathLike[]).concat(paths)
	// paths = fg.sync(paths as string[], {
	// 	cwd: process.cwd(),
	// 	ignore: [],
	// 	onlyDirectories: true,
	// 	onlyFiles: true
	// })

	if (!existsSync(target)) mkdirSync(target)

	for (const path of paths) {
		// typeof path === 'string' && !isAbsolute(path) && (path = join(process.cwd(), path))
		if (!existsSync(path)) {
			console.info(`[NOT_EXIST]: "${path} or ${target}" does not exist`)
			continue
		}
		// get stat
		const stat = lstatSync(path)
		if (stat.isFile()) {
			target = join(target as string, basename(path as string))
			copyFileSync(path, target, constants.COPYFILE_FICLONE)
			continue
		}

		// get files
		const files = readdirSync(path)
		for (const name of files) {
			const _stat = lstatSync(join(path as string, name))
			cpSync(
				join(path as string, name),
				_stat.isDirectory() ? join(target as string, name) : target,
				options
			)
		}
	}
}

export default {
	cp,
	cpSync
}
