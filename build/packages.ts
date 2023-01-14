import type { PackageManifest } from './types'

export const packages: PackageManifest[] = [
	{
		name: 'lerna-workspace-root',
		pkgName: '@node-kit/lerna-workspace-root',
		iife: false,
		mjs: false,
		dts: false,
		submodules: true,
		display: 'A simple utility to get the lerna workspace root'
	},
	{
		name: 'pnpm-workspace-root',
		pkgName: '@node-kit/pnpm-workspace-root',
		iife: false,
		mjs: false,
		dts: false,
		display: 'A simple utility to get the pnpm workspace root'
	},
	{
		name: 'yarn-workspace-root',
		pkgName: '@node-kit/yarn-workspace-root',
		iife: false,
		mjs: false,
		dts: false,
		display: 'A simple utility to get the yarn workspace root'
	},
	{
		name: 'workspace-root',
		pkgName: '@node-kit/workspace-root',
		iife: false,
		mjs: false,
		dts: false,
		display: 'A simple utility to get the workspace root'
	},
	{
		name: 'which-pm',
		pkgName: '@node-kit/which-pm',
		iife: false,
		mjs: false,
		dts: false,
		display: 'A simple utility to get which package manager used in the project'
	}
]
