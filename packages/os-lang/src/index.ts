// import { join } from 'path'
// import { existsSync } from 'fs'

export type ModulesYML = Record<string, unknown> & {
	packageManager: string
}

/**
 * osLang
 *
 * @param cwd - the pkg path
 * @returns result - WorkspaceRootResult | null
 */
export async function osLang(cwd: string = process.cwd()) {
	// const NODE_MODULES_PATH = join(cwd, 'node_modules')
	// // check yarn
	// if (existsSync(join(NODE_MODULES_PATH, YARN_INTEGRITY_FILE))) return { name: 'yarn' }
	// // check cnpm >= 8.0.0
	// if (existsSync(join(NODE_MODULES_PATH, RECENTLY_UPDATES_FILE))) return { name: 'cnpm' }
	// // check pnpm
	// try {
	// 	const modules = (await loadYml(join(NODE_MODULES_PATH, MODULES_YAML_FILE))) as ModulesYML
	// 	return normalizePMSpec(modules.packageManager)
	// } catch (err: any) {
	// 	if (err.code !== 'ENOENT') throw err
	// }
	// // check npm
	// if (existsSync(NODE_MODULES_PATH) || existsSync(join(cwd, PACKAGE_LOCK_FILE)))
	// 	return { name: 'npm' }
	// return null
}

/**
 * osLangSync
 *
 * @param cwd - the pkg path
 * @returns result - WorkspaceRootResult | null
 */
export function osLangSync(cwd: string = process.cwd()) {
	// const NODE_MODULES_PATH = join(cwd, 'node_modules')
	// // check yarn
	// if (existsSync(join(NODE_MODULES_PATH, YARN_INTEGRITY_FILE))) return { name: 'yarn' }
	// // check cnpm >= 8.0.0
	// if (existsSync(join(NODE_MODULES_PATH, RECENTLY_UPDATES_FILE))) return { name: 'cnpm' }
	// // check pnpm
	// try {
	// 	const modules = loadYmlSync(join(NODE_MODULES_PATH, MODULES_YAML_FILE)) as ModulesYML
	// 	return normalizePMSpec(modules.packageManager)
	// } catch (err: any) {
	// 	if (err.code !== 'ENOENT') throw err
	// }
	// // check npm
	// if (existsSync(NODE_MODULES_PATH) || existsSync(join(cwd, PACKAGE_LOCK_FILE)))
	// 	return { name: 'npm' }
	// return null
}
