import { workspaceRoot, workspaceRootSync } from '@node-kit/workspace-root'

/**
 * monorepoRoot
 *
 * @param pkgPath - the pkg path
 * @returns result - Promise\<WorkspaceRootResult | null\>
 */
async function monorepoRoot(pkgPath: string): Promise<string | null> {
	return (await workspaceRoot(pkgPath)) || null
}

/**
 * monorepoRootSync
 *
 * @param pkgPath - the pkg path
 * @returns result - WorkspaceRootResult | null
 */
function monorepoRootSync(pkgPath: string = process.cwd()): string | null {
	return workspaceRootSync(pkgPath) || null
}

export { monorepoRootSync, monorepoRoot, monorepoRoot as default }
