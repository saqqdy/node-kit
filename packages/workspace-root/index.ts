import { lernaWorkspaceRoot, lernaWorkspaceRootSync } from '@node-kit/lerna-workspace-root'
import { pnpmWorkspaceRoot, pnpmWorkspaceRootSync } from '@node-kit/pnpm-workspace-root'
import { yarnWorkspaceRoot, yarnWorkspaceRootSync } from '@node-kit/yarn-workspace-root'

/**
 * workspaceRoot
 *
 * @param cwd - the pkg path
 * @returns result - Promise\<string | null\>
 */
async function workspaceRoot(cwd: string = process.cwd()): Promise<string | null> {
	return (
		(await pnpmWorkspaceRoot(cwd)) ||
		(await yarnWorkspaceRoot(cwd)) ||
		(await lernaWorkspaceRoot(cwd)) ||
		null
	)
}

/**
 * workspaceRootSync
 *
 * @param cwd - the pkg path
 * @returns result - string | null
 */
function workspaceRootSync(cwd: string = process.cwd()): string | null {
	return (
		pnpmWorkspaceRootSync(cwd) ||
		yarnWorkspaceRootSync(cwd) ||
		lernaWorkspaceRootSync(cwd) ||
		null
	)
}

export { workspaceRootSync, workspaceRoot, workspaceRoot as default }
