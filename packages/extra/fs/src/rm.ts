import { isAbsolute, join } from 'path'
import {
	type PathLike,
	type RmDirOptions,
	existsSync,
	lstatSync,
	promises,
	readdirSync,
	rmdirSync,
	unlinkSync
} from 'fs'

export interface RmOptions extends RmDirOptions {
	/**
	 * force delete, default: true
	 */
	force?: boolean
	/**
	 * do not output logs, default: true
	 */
	silent?: boolean
}

/**
 * remove file
 *
 * @param paths - path or file, support array
 * @param options - RmOptions
 */
export async function rm(
	paths: PathLike | PathLike[],
	options: RmOptions = { silent: true, force: true }
): Promise<void> {
	if (!(paths instanceof Array)) paths = ([] as PathLike[]).concat(paths)

	for (let path of paths) {
		typeof path === 'string' && !isAbsolute(path) && (path = join(process.cwd(), path))
		if (!existsSync(path)) {
			options.silent !== false && console.info(`[NOT_EXIST]: "${path}" does not exist`)
			continue
		}
		// get stat
		const stat = await promises.lstat(path)
		if (stat.isFile()) {
			await promises.unlink(path)
			continue
		}

		// get files
		const files = await promises.readdir(path)
		await rm(
			files.map(name => (typeof path === 'string' ? join(path, name) : name)),
			options
		)

		// remove dir
		await promises.rmdir(path, options)
	}
}

/**
 * remove file sync
 *
 * @param paths - path or file, support array
 * @param options - RmOptions
 */
export function rmSync(
	paths: PathLike | PathLike[],
	options: RmOptions = { silent: true, force: true }
): void {
	if (!(paths instanceof Array)) paths = ([] as PathLike[]).concat(paths)

	for (let path of paths) {
		typeof path === 'string' && !isAbsolute(path) && (path = join(process.cwd(), path))
		if (!existsSync(path)) {
			options.silent !== false && console.info(`[NOT_EXIST]: "${path}" does not exist`)
			continue
		}
		// get stat
		const stat = lstatSync(path)
		if (stat.isFile()) {
			unlinkSync(path)
			continue
		}

		// get files
		const files = readdirSync(path)
		rmSync(
			files.map(name => (typeof path === 'string' ? join(path, name) : name)),
			options
		)

		// remove dir
		rmdirSync(path, options)
	}
}
