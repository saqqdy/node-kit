import { lernaWorkspaceRoot, lernaWorkspaceRootSync } from '@node-kit/lerna-workspace-root'
import { pnpmWorkspaceRoot, pnpmWorkspaceRootSync } from '@node-kit/pnpm-workspace-root'
import { yarnWorkspaceRoot, yarnWorkspaceRootSync } from '@node-kit/yarn-workspace-root'

/**
 * workspaceRoot
 *
 * @param pkgPath - the pkg path
 * @returns result - Promise\<WorkspaceRootResult | null\>
 */
async function workspaceRoot(pkgPath: string): Promise<string | null> {
	return (
		(await pnpmWorkspaceRoot(pkgPath)) ||
		(await yarnWorkspaceRoot(pkgPath)) ||
		(await lernaWorkspaceRoot(pkgPath)) ||
		null
	)
}

/**
 * workspaceRootSync
 *
 * @param pkgPath - the pkg path
 * @returns result - WorkspaceRootResult | null
 */
function workspaceRootSync(pkgPath: string = process.cwd()): string | null {
	return (
		pnpmWorkspaceRootSync(pkgPath) ||
		yarnWorkspaceRootSync(pkgPath) ||
		lernaWorkspaceRootSync(pkgPath) ||
		null
	)
}

export { workspaceRootSync, workspaceRoot, workspaceRoot as default }
