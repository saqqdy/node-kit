import { basename, dirname, isAbsolute, join } from 'path'
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

export interface CpOptions extends RmDirOptions {
	force?: boolean
}

/**
 * remove file
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

	for (let path of paths) {
		typeof path === 'string' && !isAbsolute(path) && (path = join(process.cwd(), path))
		if (!existsSync(path)) {
			console.info(`[NOT_EXIST]: "${path}" does not exist`)
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
		await cp(
			files.map(name => (typeof path === 'string' ? join(path, name) : name)),
			target
		)

		// remove dir
		await promises.rmdir(path, options)
	}
}

/**
 * remove file sync
 *
 * @param paths - path or file, support array
 * @param target - target path
 */
export function cpSync(paths: PathLike | PathLike[], target: PathLike, options?: CpOptions): void {
	if (!(paths instanceof Array)) paths = ([] as PathLike[]).concat(paths)

	const targetStat = lstatSync(target)
	if (targetStat.isFile() && typeof target === 'string') {
		console.warn(new Error('target should be a path'))
		target = dirname(target)
	}

	for (let path of paths) {
		typeof path === 'string' && !isAbsolute(path) && (path = join(process.cwd(), path))
		if (!existsSync(path)) {
			console.info(`[NOT_EXIST]: "${path}" does not exist`)
			continue
		}
		// get stat
		const stat = lstatSync(path)
		if (stat.isFile() && typeof path === 'string' && typeof target === 'string') {
			if (targetStat.isDirectory()) {
				target = join(target, basename(path))
			}
			unlinkSync(path)
			continue
		}

		// get files
		const files = readdirSync(path)
		cpSync(
			files.map(name => (typeof path === 'string' ? join(path, name) : name)),
			target
		)

		// remove dir
		rmdirSync(path, options)
	}
}

export default {
	cp,
	cpSync
}
