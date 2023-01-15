import { lernaWorkspaceRoot, lernaWorkspaceRootSync } from '@node-kit/lerna-workspace-root'
import { pnpmWorkspaceRoot, pnpmWorkspaceRootSync } from '@node-kit/pnpm-workspace-root'
import { yarnWorkspaceRoot, yarnWorkspaceRootSync } from '@node-kit/yarn-workspace-root'

/**
 * workspaceRootSync
 *
 * @requires result - Promise<WorkspaceRootResult | null>
 */
async function workspaceRoot(pkgPath: string): Promise<string> {
	return (
		(await pnpmWorkspaceRoot(pkgPath)) ||
		(await yarnWorkspaceRoot(pkgPath)) ||
		(await lernaWorkspaceRoot(pkgPath))?.dir ||
		''
	)
}

/**
 * workspaceRootSync
 *
 * @requires result - WorkspaceRootResult | null
 */
function workspaceRootSync(pkgPath: string = process.cwd()): string {
	return (
		pnpmWorkspaceRootSync(pkgPath) ||
		yarnWorkspaceRootSync(pkgPath) ||
		lernaWorkspaceRootSync(pkgPath)?.dir ||
		''
	)
}

export { workspaceRootSync, workspaceRoot, workspaceRoot as default }