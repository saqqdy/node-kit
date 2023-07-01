import { existsSync, promises, readFileSync } from 'fs'
import type { PathLike } from 'fs'

/**
 * read json file
 *
 * @example
 * ```ts
 * import { readJSON } from '@node-kit/extra.fs'
 * const data = await readJSON('/path/of/json', { encoding: 'utf8 }) // \{ "name": "saqqdy" \}
 * ```
 * @param args - Parameters\<typeof promises.readFile\>
 * @returns result - json | \{\}
 */
export async function readJSON(
	...args: Parameters<typeof promises.readFile>
): Promise<Record<string, unknown> | null> {
	if (!existsSync(args[0] as PathLike)) return null
	const data = await promises.readFile(...args).toString()
	try {
		return JSON.parse(data)
	} catch {
		return null
	}
}

/**
 * read json file sync function
 *
 * @example
 * ```ts
 * import { readJSONSync } from '@node-kit/extra.fs'
 * const data = readJSONSync('/path/of/json', { encoding: 'utf8 }) // \{ "name": "saqqdy" \}
 * ```
 * @param args - Parameters\<typeof readFileSync\>
 * @returns result - json | \{\}
 */
export function readJSONSync(
	...args: Parameters<typeof readFileSync>
): Record<string, unknown> | null {
	if (!existsSync(args[0] as PathLike)) return null
	const data = readFileSync(...args).toString()
	try {
		return JSON.parse(data)
	} catch {
		return {}
	}
}
