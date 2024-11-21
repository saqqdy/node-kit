import { dirname, join } from 'path'
import findUp from 'find-up'
import { getRealPath, getRealPathSync } from '@node-kit/extra.fs'

const WORKSPACE_DIR_ENV_VAR = 'NPM_CONFIG_WORKSPACE_DIR'
const WORKSPACE_MANIFEST_FILENAME = 'lerna.json'

/**
 * get lerna workspace root dir sync function
 *
 * @param cwd - work dir
 * @returns result - workspace root dir
 */
export async function lernaWorkspaceRoot(cwd: string = process.cwd()): Promise<string | null> {
	const workspaceManifestDirEnvVar =
		process.env[WORKSPACE_DIR_ENV_VAR] ?? process.env[WORKSPACE_DIR_ENV_VAR.toLowerCase()]
	const workspaceManifestPath = workspaceManifestDirEnvVar
		? join(workspaceManifestDirEnvVar, WORKSPACE_MANIFEST_FILENAME)
		: await findUp(WORKSPACE_MANIFEST_FILENAME, {
				cwd: await getRealPath(cwd)
			})

	return (workspaceManifestPath && dirname(workspaceManifestPath)) || null
}

/**
 * get lerna workspace root dir sync function
 *
 * @param cwd - work dir
 * @returns result - workspace root dir
 */
export function lernaWorkspaceRootSync(cwd: string = process.cwd()): string | null {
	const workspaceManifestDirEnvVar =
		process.env[WORKSPACE_DIR_ENV_VAR] ?? process.env[WORKSPACE_DIR_ENV_VAR.toLowerCase()]
	const workspaceManifestPath = workspaceManifestDirEnvVar
		? join(workspaceManifestDirEnvVar, WORKSPACE_MANIFEST_FILENAME)
		: findUp.sync(WORKSPACE_MANIFEST_FILENAME, {
				cwd: getRealPathSync(cwd)
			})

	return (workspaceManifestPath && dirname(workspaceManifestPath)) || null
}
