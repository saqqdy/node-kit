import type { PackageManifest } from './types'

export const packages: PackageManifest[] = [
	{
		name: 'pnpm-workspace-root',
		pkgName: '@node-kit/pnpm-workspace-root',
		iife: false,
		mjs: false,
		dts: false,
		submodules: true,
		display: 'A simple utility to get the pnpm workspace root'
	}
]
