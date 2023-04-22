import { type PathLike } from 'fs'
import { type CpOptions, cp, cpSync } from '../cp'
import { type RmOptions, rm, rmSync } from '../rm'

export interface MvOptions extends CpOptions, RmOptions {
	force?: boolean
}

/**
 * move file
 *
 * @param paths - path or file, support array
 * @param target - target path
 */
export async function mv(
	paths: PathLike | PathLike[],
	target: PathLike,
	options?: MvOptions
): Promise<void> {
	await cp(paths, target, options)
	await rm(paths, options)
}

/**
 * move file sync
 *
 * @param paths - path or file, support array
 * @param target - target path
 */
export function mvSync(paths: PathLike | PathLike[], target: PathLike, options?: MvOptions): void {
	cpSync(paths, target, options)
	rmSync(paths, options)
}

export default {
	mv,
	mvSync
}
