import { isAbsolute, join } from 'node:path'
import { existsSync } from 'node:fs'
import { findUp, findUpSync } from 'find-up'
import { pmInfo, pmInfoSync } from 'pm-info'
import { workspaceRoot, workspaceRootSync } from 'workspace-root'

export interface WhatPMResult {
	name: string
	version: string
	isWorkspace: boolean
}

const cwd = process.cwd()

async function whatPM(pkgPath: string): Promise<WhatPMResult | null> {
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
	const pm = await pmInfo(pkgPath)
	return (
		pm && {
			name: pm.name,
			version: pm.version || '*',
			isWorkspace
		}
	)
}

function whatPMSync(pkgPath: string): WhatPMResult | null {
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
	if (findUpSync('pnpm-lock.yaml', { cwd: pkgPath })) {
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

export { whatPMSync, whatPM, whatPM as default }
