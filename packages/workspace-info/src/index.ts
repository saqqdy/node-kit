import { lernaWorkspaceInfo, lernaWorkspaceInfoSync } from '@node-kit/lerna-workspace-info'
import { pnpmWorkspaceInfo, pnpmWorkspaceInfoSync } from '@node-kit/pnpm-workspace-info'
import { yarnWorkspaceInfo, yarnWorkspaceInfoSync } from '@node-kit/yarn-workspace-info'

export type WorkspaceInfo = Record<
	string,
	{
		path: string
	}
>

/**
 * workspaceInfo
 *
 * @param cwd - the pkg path
 * @returns result - Promise\<WorkspaceInfo | null\>
 */
export async function workspaceInfo(cwd: string = process.cwd()): Promise<WorkspaceInfo | null> {
	return (
		(await pnpmWorkspaceInfo(cwd)) ||
		(await yarnWorkspaceInfo(cwd)) ||
		(await lernaWorkspaceInfo(cwd)) ||
		null
	)
}

/**
 * workspaceInfoSync
 *
 * @param cwd - the pkg path
 * @returns result - WorkspaceInfo | null
 */
export function workspaceInfoSync(cwd: string = process.cwd()): WorkspaceInfo | null {
	return (
		pnpmWorkspaceInfoSync(cwd) ||
		yarnWorkspaceInfoSync(cwd) ||
		lernaWorkspaceInfoSync(cwd) ||
		null
	)
}
