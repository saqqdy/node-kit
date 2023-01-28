import { workspaceRoot, workspaceRootSync } from 'workspace-root'

/**
 * monorepoRoot
 *
 * @param cwd - the pkg path
 * @returns result - Promise\<string | null\>
 */
async function monorepoRoot(cwd: string = process.cwd()): Promise<string | null> {
	return (await workspaceRoot(cwd)) || null
}

/**
 * monorepoRootSync
 *
 * @param cwd - the pkg path
 * @returns result - string | null
 */
function monorepoRootSync(cwd: string = process.cwd()): string | null {
	return workspaceRootSync(cwd) || null
}

export { monorepoRootSync, monorepoRoot, monorepoRoot as default }
