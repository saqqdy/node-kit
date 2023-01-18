import { dirname, join, normalize, relative } from 'path'
const fg = require('fast-glob')

/**
 * workspaceProjects
 *
 * @param pkgPath - the pkg path
 * @returns result - Promise\<WorkspaceRootResult | null\>
 */
async function workspaceProjects(pkgPath: string): Promise<string> {
	return ''
}

/**
 * workspaceProjectsSync
 *
 * @param pkgPath - the pkg path
 * @returns result - WorkspaceRootResult | null
 */
function workspaceProjectsSync(pkgPath: string = process.cwd()): string {
	const relativePath = relative(current, await getRealPath(cwd))
	if () {
		//
	}
	return ''
}

function normalizePatterns (patterns: readonly string[]) {
	const normalizedPatterns: string[] = []
	for (const pattern of patterns) {
	  // We should add separate pattern for each extension
	  // for some reason, fast-glob is buggy with /package.{json,yaml,json5} pattern
	  normalizedPatterns.push(
		pattern.replace(/\/?$/, '/package.json')
	  )
	  normalizedPatterns.push(
		pattern.replace(/\/?$/, '/package.json5')
	  )
	  normalizedPatterns.push(
		pattern.replace(/\/?$/, '/package.yaml')
	  )
	}
	return normalizedPatterns
  }

export { workspaceProjectsSync, workspaceProjects, workspaceProjects as default }
