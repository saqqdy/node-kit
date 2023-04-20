import { join } from 'path'
import { existsSync } from 'fs'
import { loadYml, loadYmlSync } from 'load-yml'

export type ModulesYML = Record<string, unknown> & {
	packageManager: string
}

export interface PackageManager {
	name: string
	version?: string
}

const PACKAGE_LOCK_FILE = 'package-lock.json'
const YARN_INTEGRITY_FILE = '.yarn-integrity'
const MODULES_YAML_FILE = '.modules.yaml'
const RECENTLY_UPDATES_FILE = '.recently_updates.txt'

/**
 * pmInfo
 *
 * @param cwd - the pkg path
 * @returns result - WorkspaceRootResult | null
 */
async function pmInfo(cwd: string = process.cwd()): Promise<PackageManager | null> {
	const NODE_MODULES_PATH = join(cwd, 'node_modules')

	// check yarn
	if (existsSync(join(NODE_MODULES_PATH, YARN_INTEGRITY_FILE))) return { name: 'yarn' }

	// check cnpm >= 8.0.0
	if (existsSync(join(NODE_MODULES_PATH, RECENTLY_UPDATES_FILE))) return { name: 'cnpm' }

	// check pnpm
	try {
		const modules = (await loadYml(join(NODE_MODULES_PATH, MODULES_YAML_FILE))) as ModulesYML
		return normalizePMSpec(modules.packageManager)
	} catch (err: any) {
		if (err.code !== 'ENOENT') throw err
	}

	// check npm
	if (existsSync(NODE_MODULES_PATH) || existsSync(join(cwd, PACKAGE_LOCK_FILE)))
		return { name: 'npm' }
	return null
}

/**
 * pmInfoSync
 *
 * @param cwd - the pkg path
 * @returns result - WorkspaceRootResult | null
 */
function pmInfoSync(cwd: string = process.cwd()): PackageManager | null {
	const NODE_MODULES_PATH = join(cwd, 'node_modules')

	// check yarn
	if (existsSync(join(NODE_MODULES_PATH, YARN_INTEGRITY_FILE))) return { name: 'yarn' }

	// check cnpm >= 8.0.0
	if (existsSync(join(NODE_MODULES_PATH, RECENTLY_UPDATES_FILE))) return { name: 'cnpm' }

	// check pnpm
	try {
		const modules = loadYmlSync(join(NODE_MODULES_PATH, MODULES_YAML_FILE)) as ModulesYML
		return normalizePMSpec(modules.packageManager)
	} catch (err: any) {
		if (err.code !== 'ENOENT') throw err
	}

	// check npm
	if (existsSync(NODE_MODULES_PATH) || existsSync(join(cwd, PACKAGE_LOCK_FILE)))
		return { name: 'npm' }
	return null
}

/**
 * normalizePMSpec
 *
 * @param pm - packageManager version: pnpm\@7.30.3
 * @returns result - \{ name: 'pnpm', version: '7.30.3' \}
 */
function normalizePMSpec(pm: string): PackageManager {
	if (pm[0] === '@') {
		const woPrefix = pm.slice(1)
		const parts = woPrefix.split('@')
		return {
			name: `@${parts[0]}`,
			version: parts[1]
		}
	}
	const parts = pm.split('@')
	return {
		name: parts[0],
		version: parts[1]
	}
}

export { normalizePMSpec, pmInfoSync, pmInfo, pmInfo as default }
