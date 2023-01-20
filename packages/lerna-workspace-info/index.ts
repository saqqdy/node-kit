import { dirname, join } from 'path'
import fg from 'fast-glob'
import { readJSON, readJSONSync } from '@node-kit/utils'
import { lernaWorkspaceRoot, lernaWorkspaceRootSync } from '@node-kit/lerna-workspace-root'

export type ManifestInfo = {
	packages: string | string[]
} & Record<string, unknown>

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
const WORKSPACE_MANIFEST_FILENAME = 'lerna.json'

/**
 * get lerna workspace information sync function
 *
 * @param cwd - work dir
 * @returns result - workspace root dir
 */
async function lernaWorkspaceInfo(cwd: string = process.cwd()): Promise<WorkspaceInfo | void> {
	const root = await lernaWorkspaceRoot(cwd)
	if (!root) throw new Error('not a lerna workspace project')

	const manifest = (await readJSON(join(root, WORKSPACE_MANIFEST_FILENAME))) as ManifestInfo
	const projects = await fg(([] as string[]).concat(manifest.packages), {
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
 * get lerna workspace information sync function
 *
 * @param cwd - work dir
 * @returns result - workspace root dir
 */
function lernaWorkspaceInfoSync(cwd: string): WorkspaceInfo | void {
	const root = lernaWorkspaceRootSync(cwd)
	if (!root) throw new Error('not a lerna workspace project')

	const manifest = readJSONSync(join(root, WORKSPACE_MANIFEST_FILENAME)) as ManifestInfo
	const projects = fg.sync(([] as string[]).concat(manifest.packages), {
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

export { lernaWorkspaceInfoSync, lernaWorkspaceInfo, lernaWorkspaceInfo as default }
