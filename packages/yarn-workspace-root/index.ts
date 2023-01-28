import { dirname, join, normalize, relative } from 'path'
import { getRealPath, getRealPathSync, readJSON, readJSONSync } from '@node-kit/extra.fs'
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
		const manifest = (await readJSON(join(current, 'package.json'))) as Manifest
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
		const manifest = readJSONSync(join(current, 'package.json')) as Manifest
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

export { yarnWorkspaceRootSync, yarnWorkspaceRoot, yarnWorkspaceRoot as default }
