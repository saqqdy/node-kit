import { lernaWorkspaceRoot, lernaWorkspaceRootSync } from '@node-kit/lerna-workspace-root'
import { pnpmWorkspaceRoot, pnpmWorkspaceRootSync } from '@node-kit/pnpm-workspace-root'
import { yarnWorkspaceRoot, yarnWorkspaceRootSync } from '@node-kit/yarn-workspace-root'

/**
 * monorepoRoot
 *
 * @param pkgPath - the pkg path
 * @returns result - Promise\<WorkspaceRootResult | null\>
 */
async function monorepoRoot(pkgPath: string): Promise<string> {
	return (
		(await pnpmWorkspaceRoot(pkgPath)) ||
		(await yarnWorkspaceRoot(pkgPath)) ||
		(await lernaWorkspaceRoot(pkgPath))?.dir ||
		''
	)
}

/**
 * monorepoRootSync
 *
 * @param pkgPath - the pkg path
 * @returns result - WorkspaceRootResult | null
 */
function monorepoRootSync(pkgPath: string = process.cwd()): string {
	return (
		pnpmWorkspaceRootSync(pkgPath) ||
		yarnWorkspaceRootSync(pkgPath) ||
		lernaWorkspaceRootSync(pkgPath)?.dir ||
		''
	)
}

export { monorepoRootSync, monorepoRoot, monorepoRoot as default }
