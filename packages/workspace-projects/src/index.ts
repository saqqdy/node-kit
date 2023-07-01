import { lernaWorkspaceInfo, lernaWorkspaceInfoSync } from '@node-kit/lerna-workspace-info'
import { pnpmWorkspaceInfo, pnpmWorkspaceInfoSync } from '@node-kit/pnpm-workspace-info'
import { yarnWorkspaceInfo, yarnWorkspaceInfoSync } from '@node-kit/yarn-workspace-info'

/**
 * workspaceInfo
 *
 * @param cwd - the pkg path
 * @returns result - Promise\<string[] | null\>
 */
export async function workspaceProjects(cwd: string = process.cwd()): Promise<string[] | null> {
	const info =
		(await pnpmWorkspaceInfo(cwd)) ||
		(await yarnWorkspaceInfo(cwd)) ||
		(await lernaWorkspaceInfo(cwd)) ||
		null
	if (info) {
		return Object.keys(info).map(project => info[project].path)
	}
	return null
}

/**
 * workspaceInfoSync
 *
 * @param cwd - the pkg path
 * @returns result - string[] | null
 */
export function workspaceProjectsSync(cwd: string = process.cwd()): string[] | null {
	const info =
		pnpmWorkspaceInfoSync(cwd) ||
		yarnWorkspaceInfoSync(cwd) ||
		lernaWorkspaceInfoSync(cwd) ||
		null
	if (info) {
		return Object.keys(info).map(project => info[project].path)
	}
	return null
}
