import type { PathOrFileDescriptor, WriteFileOptions } from 'fs'
import { readFileSync, writeFileSync } from 'fs'

/**
 * 读取json文件内容
 *
 * @example
 * ```ts
 * import { readJSONSync } from '@jssj/node'
 * const data = readJSONSync('/path/of/json', { encoding: 'utf8 }) // { "name": "saqqdy" }
 * ```
 * @param args - Parameters<typeof readFileSync>
 * @param args.path - Path to file
 * @param args.options - options
 * @returns result - json | {}
 */
export function readJSONSync(...args: Parameters<typeof readFileSync>): Record<string, unknown> {
	const data = readFileSync(...args).toString()
	try {
		return JSON.parse(data)
	} catch {
		return {}
	}
}

/**
 * 写入json文件内容
 *
 * @example
 * ```ts
 * import { writeJSONSync } from '@jssj/node'
 * writeJSONSync('/path/of/file', 'test data', { encoding: 'utf8 })
 * ```
 * @param args - Parameters<typeof writeFileSync>
 * @param args.path - Path to file
 * @param args.data - data
 * @param args.options - options
 */
export function writeJSONSync(
	file: PathOrFileDescriptor,
	data: Record<string, unknown> | Parameters<typeof writeFileSync>[1],
	options?: WriteFileOptions
): void {
	if (typeof data === 'object') {
		data = (data && JSON.stringify(data, null, 4)) || ''
	}
	writeFileSync(file, data, options)
}
