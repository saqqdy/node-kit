import { existsSync, readFileSync } from 'fs'
import { dirname, join, normalize, relative } from 'path'
import { getRealPath, getRealPathSync } from '@node-kit/utils'
import micromatch from 'micromatch'

export type Manifest =
	| (Record<string, unknown> & {
			packages: any
			workspaces: any
	  })
	| null

/**
 * get yarn workspace root dir
 *
 * @param cwd - work dir
 * @returns result - workspace root dir
 */
async function yarnWorkspaceRoot(cwd: string = process.cwd()): Promise<string | null> {
	let previous = null,
		current = normalize(cwd)

	do {
		const manifest = readPackageJSON(current)
		const workspaces = extractWorkspaces(manifest)

		if (workspaces) {
			const relativePath = relative(current, await getRealPath(cwd))
			if (relativePath === '' || micromatch([relativePath], workspaces).length > 0) {
				return current
			} else {
				return null
			}
		}

		previous = current
		current = dirname(current)
	} while (current !== previous)

	return null
}

/**
 * get yarn workspace root dir sync function
 *
 * @param cwd - work dir
 * @returns result - workspace root dir
 */
function yarnWorkspaceRootSync(cwd: string = process.cwd()): string | null {
	let previous = null,
		current = normalize(cwd)

	do {
		const manifest = readPackageJSON(current)
		const workspaces = extractWorkspaces(manifest)

		if (workspaces) {
			const relativePath = relative(current, getRealPathSync(cwd))
			if (relativePath === '' || micromatch([relativePath], workspaces).length > 0) {
				return current
			} else {
				return null
			}
		}

		previous = current
		current = dirname(current)
	} while (current !== previous)

	return null
}

function extractWorkspaces(manifest: Manifest) {
	const workspaces = (manifest || {}).workspaces
	return (workspaces && workspaces.packages) || (Array.isArray(workspaces) ? workspaces : null)
}

function readPackageJSON(dir: string): Manifest {
	const file = join(dir, 'package.json')
	if (existsSync(file)) {
		return JSON.parse(readFileSync(file, 'utf8'))
	}
	return null
}

export { yarnWorkspaceRootSync, yarnWorkspaceRoot, yarnWorkspaceRoot as default }
