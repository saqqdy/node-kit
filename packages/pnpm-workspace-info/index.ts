import { dirname, join } from 'path'
import { PnpmError } from '@pnpm/error'
import { findUp, findUpSync } from 'find-up'
import { getRealPath, getRealPathSync } from '@node-kit/utils'

/**
 * get workspace information sync function
 *
 * @param cwd - work dir
 * @returns result - workspace root dir
 */
async function workspaceInfo(cwd: string): Promise<string | undefined> {
	const workspaceManifestDirEnvVar =
		process.env[WORKSPACE_DIR_ENV_VAR] ?? process.env[WORKSPACE_DIR_ENV_VAR.toLowerCase()]
	const workspaceManifestLocation = workspaceManifestDirEnvVar
		? join(workspaceManifestDirEnvVar, 'pnpm-workspace.yaml')
		: await findUp([WORKSPACE_MANIFEST_FILENAME, 'pnpm-workspace.yml'], {
				cwd: await getRealPath(cwd)
		  })
	if (workspaceManifestLocation?.endsWith('.yml')) {
		throw new PnpmError(
			'BAD_WORKSPACE_MANIFEST_NAME',
			`The workspace manifest file should be named "pnpm-workspace.yaml". File found: ${workspaceManifestLocation}`
		)
	}
	return workspaceManifestLocation && dirname(workspaceManifestLocation)
}

/**
 * get workspace information sync function
 *
 * @param cwd - work dir
 * @returns result - workspace root dir
 */
function workspaceInfoSync(cwd: string): string | undefined {
	const workspaceManifestDirEnvVar =
		process.env[WORKSPACE_DIR_ENV_VAR] ?? process.env[WORKSPACE_DIR_ENV_VAR.toLowerCase()]
	const workspaceManifestLocation = workspaceManifestDirEnvVar
		? join(workspaceManifestDirEnvVar, 'pnpm-workspace.yaml')
		: findUpSync([WORKSPACE_MANIFEST_FILENAME, 'pnpm-workspace.yml'], {
				cwd: getRealPathSync(cwd)
		  })
	if (workspaceManifestLocation?.endsWith('.yml')) {
		throw new PnpmError(
			'BAD_WORKSPACE_MANIFEST_NAME',
			`The workspace manifest file should be named "pnpm-workspace.yaml". File found: ${workspaceManifestLocation}`
		)
	}
	return workspaceManifestLocation && dirname(workspaceManifestLocation)
}

export { workspaceInfoSync, workspaceInfo, workspaceInfo as default }
