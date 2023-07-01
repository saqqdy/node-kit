import { pmInfo, pmInfoSync } from 'pm-info'

/**
 * whichPM
 *
 * @param cwd - the pkg path
 * @param withVersion - concat the package manager version
 * @returns result - WorkspaceRootResult | null
 */
export async function whichPM(
	cwd: string = process.cwd(),
	withVersion = true
): Promise<string | null> {
	const info = await pmInfo(cwd)
	if (!info) return null
	else if (!withVersion) return info.name
	return `${info.name}${info.version ? '@' + info.version : ''}`
}

/**
 * whichPMSync
 *
 * @param cwd - the pkg path
 * @param withVersion - concat the package manager version
 * @returns result - WorkspaceRootResult | null
 */
export function whichPMSync(cwd: string = process.cwd(), withVersion = true): string | null {
	const info = pmInfoSync(cwd)
	if (!info) return null
	else if (!withVersion) return info.name
	return `${info.name}${info.version ? '@' + info.version : ''}`
}
