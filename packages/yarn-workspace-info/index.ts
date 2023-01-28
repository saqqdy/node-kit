import { join } from 'path'
import fg from 'fast-glob'
import { readJSON, readJSONSync } from '@node-kit/extra.fs'
import { dirname } from '@node-kit/extra.path'
import { yarnWorkspaceRoot, yarnWorkspaceRootSync } from '@node-kit/yarn-workspace-root'

export type ManifestInfo = Record<string, unknown> & {
	workspaces: string | string[]
}

export type WorkspaceInfo = Record<
	string,
	{
		path: string
	}
>

const DEFAULT_IGNORE_PATHS = [
	'**/node_modules/**',
	'**/bower_components/**',
	'**/.*/**',
	'**/__test__/**',
	'**/__tests__/**',
	'**/test/**',
	'**/tests/**'
]
const WORKSPACE_MANIFEST_FILENAME = 'package.json'

/**
 * get yarn workspace information sync function
 *
 * @param cwd - work dir
 * @returns result - workspace root dir
 */
async function yarnWorkspaceInfo(cwd: string = process.cwd()): Promise<WorkspaceInfo | null> {
	const root = await yarnWorkspaceRoot(cwd)
	if (!root) {
		console.error('not a yarn workspace project')
		return null
	}

	const manifest = (await readJSON(join(root, WORKSPACE_MANIFEST_FILENAME))) as ManifestInfo
	const projects = await fg(([] as string[]).concat(manifest.workspaces), {
		cwd: root,
		ignore: DEFAULT_IGNORE_PATHS,
		onlyDirectories: true
	})
	const workspaceInfo: WorkspaceInfo = {}
	for (const projectPath of projects) {
		workspaceInfo[dirname(projectPath)] = {
			path: projectPath
		}
	}
	return workspaceInfo
}

/**
 * get yarn workspace information sync function
 *
 * @param cwd - work dir
 * @returns result - workspace root dir
 */
function yarnWorkspaceInfoSync(cwd: string): WorkspaceInfo | null {
	const root = yarnWorkspaceRootSync(cwd)
	if (!root) {
		console.error('not a yarn workspace project')
		return null
	}

	const manifest = readJSONSync(join(root, WORKSPACE_MANIFEST_FILENAME)) as ManifestInfo
	const projects = fg.sync(([] as string[]).concat(manifest.workspaces), {
		cwd: root,
		ignore: DEFAULT_IGNORE_PATHS,
		onlyDirectories: true
	})
	const workspaceInfo: WorkspaceInfo = {}
	for (const projectPath of projects) {
		workspaceInfo[dirname(projectPath)] = {
			path: projectPath
		}
	}
	return workspaceInfo
}

export { yarnWorkspaceInfoSync, yarnWorkspaceInfo, yarnWorkspaceInfo as default }
