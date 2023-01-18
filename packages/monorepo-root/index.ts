export { workspaceRoot, workspaceRootSync } from '@node-kit/workspace-root'

/**
 * monorepoRoot
 *
 * @param pkgPath - the pkg path
 * @returns result - Promise\<WorkspaceRootResult | null\>
 */
async function monorepoRoot(pkgPath: string): Promise<string> {
	return (await workspaceRoot(pkgPath)) || ''
}

/**
 * monorepoRootSync
 *
 * @param pkgPath - the pkg path
 * @returns result - WorkspaceRootResult | null
 */
function monorepoRootSync(pkgPath: string = process.cwd()): string {
	return workspaceRootSync(pkgPath) || ''
}

export { monorepoRootSync, monorepoRoot, monorepoRoot as default }
