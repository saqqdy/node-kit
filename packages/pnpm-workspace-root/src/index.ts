import { dirname, join } from 'path'
import { PnpmError } from '@pnpm/error'
import findUp from 'find-up'
import { getRealPath, getRealPathSync } from '@node-kit/extra.fs'

const WORKSPACE_DIR_ENV_VAR = 'NPM_CONFIG_WORKSPACE_DIR'
const WORKSPACE_MANIFEST_FILENAME = 'pnpm-workspace.yaml'

/**
 * get pnpm workspace root dir sync function
 *
 * @param cwd - work dir
 * @returns result - workspace root dir
 */
export async function pnpmWorkspaceRoot(cwd: string = process.cwd()): Promise<string | null> {
	const workspaceManifestDirEnvVar =
		process.env[WORKSPACE_DIR_ENV_VAR] ?? process.env[WORKSPACE_DIR_ENV_VAR.toLowerCase()]
	const workspaceManifestPath = workspaceManifestDirEnvVar
		? join(workspaceManifestDirEnvVar, 'pnpm-workspace.yaml')
		: await findUp([WORKSPACE_MANIFEST_FILENAME, 'pnpm-workspace.yml'], {
				cwd: await getRealPath(cwd)
			})
	if (workspaceManifestPath?.endsWith('.yml')) {
		throw new PnpmError(
			'BAD_WORKSPACE_MANIFEST_NAME',
			`The workspace manifest file should be named "pnpm-workspace.yaml". File found: ${workspaceManifestPath}`
		)
	}
	return (workspaceManifestPath && dirname(workspaceManifestPath)) || null
}

/**
 * get pnpm workspace root dir sync function
 *
 * @param cwd - work dir
 * @returns result - workspace root dir
 */
export function pnpmWorkspaceRootSync(cwd: string = process.cwd()): string | null {
	const workspaceManifestDirEnvVar =
		process.env[WORKSPACE_DIR_ENV_VAR] ?? process.env[WORKSPACE_DIR_ENV_VAR.toLowerCase()]
	const workspaceManifestPath = workspaceManifestDirEnvVar
		? join(workspaceManifestDirEnvVar, 'pnpm-workspace.yaml')
		: findUp.sync([WORKSPACE_MANIFEST_FILENAME, 'pnpm-workspace.yml'], {
				cwd: getRealPathSync(cwd)
			})
	if (workspaceManifestPath?.endsWith('.yml')) {
		throw new PnpmError(
			'BAD_WORKSPACE_MANIFEST_NAME',
			`The workspace manifest file should be named "pnpm-workspace.yaml". File found: ${workspaceManifestPath}`
		)
	}
	return (workspaceManifestPath && dirname(workspaceManifestPath)) || null
}
