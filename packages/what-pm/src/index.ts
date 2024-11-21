import { isAbsolute, join } from 'path'
import { existsSync } from 'fs'
import findUp from 'find-up'
import { pmInfo, pmInfoSync } from 'pm-info'
import { workspaceRoot, workspaceRootSync } from 'workspace-root'

export interface WhatPMResult {
	name: string
	version: string
	isWorkspace: boolean
}

const cwd = process.cwd()

export async function whatPM(pkgPath: string): Promise<WhatPMResult | null> {
	if (typeof pkgPath !== 'string') {
		throw new TypeError(`pkgPath should be a string, got ${typeof pkgPath}`)
	}
	// covert to absolute path
	if (!isAbsolute(pkgPath)) pkgPath = join(cwd, pkgPath)
	const isWorkspace = !!(await workspaceRoot(pkgPath))
	if (existsSync(join(pkgPath, 'package-lock.json'))) {
		return {
			name: 'npm',
			version: '>=5',
			isWorkspace
		}
	}
	if (existsSync(join(pkgPath, 'yarn.lock'))) {
		return {
			name: 'yarn',
			version: '*',
			isWorkspace
		}
	}
	if (existsSync(join(pkgPath, 'pnpm-lock.yaml'))) {
		return {
			name: 'pnpm',
			version: '>=3',
			isWorkspace
		}
	}
	if (existsSync(join(pkgPath, 'shrinkwrap.yaml'))) {
		return {
			name: 'pnpm',
			version: '1 || 2',
			isWorkspace
		}
	}
	if (await findUp('pnpm-lock.yaml', { cwd: pkgPath })) {
		return {
			name: 'pnpm',
			version: '>=3',
			isWorkspace
		}
	}
	if (existsSync(join(pkgPath, 'bun.lockb'))) {
		return {
			name: 'bun',
			version: '*',
			isWorkspace
		}
	}
	const pm = await pmInfo(pkgPath)
	return (
		pm && {
			name: pm.name,
			version: pm.version || '*',
			isWorkspace
		}
	)
}

export function whatPMSync(pkgPath: string): WhatPMResult | null {
	if (typeof pkgPath !== 'string') {
		throw new TypeError(`pkgPath should be a string, got ${typeof pkgPath}`)
	}
	// covert to absolute path
	if (!isAbsolute(pkgPath)) pkgPath = join(cwd, pkgPath)
	const isWorkspace = !!workspaceRootSync(pkgPath)
	if (existsSync(join(pkgPath, 'package-lock.json'))) {
		return {
			name: 'npm',
			version: '>=5',
			isWorkspace
		}
	}
	if (existsSync(join(pkgPath, 'yarn.lock'))) {
		return {
			name: 'yarn',
			version: '*',
			isWorkspace
		}
	}
	if (existsSync(join(pkgPath, 'pnpm-lock.yaml'))) {
		return {
			name: 'pnpm',
			version: '>=3',
			isWorkspace
		}
	}
	if (existsSync(join(pkgPath, 'shrinkwrap.yaml'))) {
		return {
			name: 'pnpm',
			version: '1 || 2',
			isWorkspace
		}
	}
	if (existsSync(join(pkgPath, 'bun.lockb'))) {
		return {
			name: 'bun',
			version: '*',
			isWorkspace
		}
	}
	if (findUp.sync('pnpm-lock.yaml', { cwd: pkgPath })) {
		return {
			name: 'pnpm',
			version: '>=3',
			isWorkspace
		}
	}
	const pm = pmInfoSync(pkgPath)
	return (
		pm && {
			name: pm.name,
			version: pm.version || '*',
			isWorkspace
		}
	)
}
