import { type PathLike } from 'fs'
import { type CpOptions, cp, cpSync } from './cp'
import { type RmOptions, rm, rmSync } from './rm'

export interface MvOptions extends CpOptions, RmOptions {
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
 * move file
 *
 * @param paths - path or file, support array
 * @param target - target path
 * @param options - MvOptions
 */
export async function mv(
	paths: PathLike | PathLike[],
	target: PathLike,
	options: MvOptions = { silent: true, force: true }
): Promise<void> {
	await cp(paths, target, options)
	await rm(paths, options)
}

/**
 * move file sync
 *
 * @param paths - path or file, support array
 * @param target - target path
 * @param options - MvOptions
 */
export function mvSync(
	paths: PathLike | PathLike[],
	target: PathLike,
	options: MvOptions = { silent: true, force: true }
): void {
	cpSync(paths, target, options)
	rmSync(paths, options)
}
