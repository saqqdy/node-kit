// import path from 'path'
// import fse from 'fs-extra'
import type { Lerna, Pkg, Ref, Result } from './types'

// export async function readJson<T>(dir: string, file: string) {
// 	try {
// 		return (await fse.readJson(path.join(dir, file))) as T
// 	} catch (err: any) {
// 		if (err.code !== 'ENOENT') {
// 			throw err
// 		}
// 	}
// }

// export function readJsonSync<T>(dir: string, file: string) {
// 	try {
// 		return fse.readJSONSync(path.join(dir, file)) as T
// 	} catch (err: any) {
// 		if (err.code !== 'ENOENT') {
// 			throw err
// 		}
// 	}
// }

export function yarnlize(dir: string, ref: Ref, pkg?: Pkg): Result<'yarn' | 'bolt'> | undefined {
	if (pkg) {
		if (ref.pkg == null) {
			ref.pkg = dir
		}

		if (pkg.workspaces || pkg.bolt) {
			return { dir, client: pkg.bolt ? 'bolt' : 'yarn' }
		}
	}
}

export function lernalize(dir: string, lerna?: Lerna): Result<'lerna'> | undefined {
	// https://lerna.js.org/docs/api-reference/configuration
	if (lerna) {
		if (lerna.useWorkspaces || lerna.packages) {
			return { client: 'lerna', dir }
		}
	}
}

export function pnpmlize(dir: string, exists: boolean): Result<'pnpm'> | undefined {
	if (exists) {
		return { client: 'pnpm', dir }
	}
}

export function rollup(result: Result | undefined, ref: Ref) {
	if (ref.pkg == null) {
		throw new Error(`No package.json could be found upwards from the directory ${ref.cwd}`)
	}

	return result || { client: 'root', dir: ref.pkg }
}
