import { sep } from 'path'

/**
 * get dirname from path
 *
 * @example
 * ```ts
 * import { dirname } from '@node-kit/extra.path'
 * const dir = dirname('/path/of/dir/saqqdy') // saqqdy
 * ```
 * @param path - path string
 * @returns result - dir name
 */
export function dirname(path: string): string {
	const pathArr = path.replace(new RegExp(`${sep}?$`), '').split(sep)
	return pathArr.length > 0 ? pathArr.pop()! : ''
}

export default { dirname }
