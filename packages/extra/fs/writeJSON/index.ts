import { promises, writeFileSync } from 'fs'
import type { PathOrFileDescriptor, WriteFileOptions } from 'fs'

/**
 * write json file
 *
 * @example
 * ```ts
 * import { writeJSON } from '@node-kit/extra.fs'
 * writeJSON('/path/of/file', 'test data', { encoding: 'utf8 }).then(() => {})
 * ```
 * @param args - Parameters\<typeof promises.writeFile\>
 */
export async function writeJSON(
	file: Parameters<typeof promises.writeFile>[0],
	data: Record<string, unknown> | Parameters<typeof promises.writeFile>[1],
	options?: WriteFileOptions
): Promise<void> {
	if (typeof data === 'object') {
		data = (data && JSON.stringify(data, null, 4)) || ''
	}
	await promises.writeFile(file, data, options)
}

/**
 * write json file sync function
 *
 * @example
 * ```ts
 * import { writeJSONSync } from '@node-kit/extra.fs'
 * writeJSONSync('/path/of/file', 'test data', { encoding: 'utf8 })
 * ```
 * @param args - Parameters\<typeof writeFileSync\>
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

export default {
	writeJSON,
	writeJSONSync
}
