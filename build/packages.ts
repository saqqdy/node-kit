import type { PackageManifest } from './types'

export const packages: PackageManifest[] = [
	{
		name: 'utils',
		pkgName: '@node-kit/utils',
		iife: false,
		submodules: true,
		display: 'Some shared utilities'
	},
	{
		name: 'lerna-workspace-root',
		pkgName: '@node-kit/lerna-workspace-root',
		iife: false,
		display: 'A simple utility to get the lerna workspace root'
	},
	{
		name: 'pnpm-workspace-root',
		pkgName: '@node-kit/pnpm-workspace-root',
		iife: false,
		display: 'A simple utility to get the pnpm workspace root'
	},
	{
		name: 'yarn-workspace-root',
		pkgName: '@node-kit/yarn-workspace-root',
		iife: false,
		display: 'A simple utility to get the yarn workspace root'
	},
	{
		name: 'workspace-root',
		pkgName: '@node-kit/workspace-root',
		iife: false,
		display: 'A simple utility to get the workspace root'
	},
	{
		name: 'monorepo-root',
		pkgName: 'monorepo-root',
		iife: false,
		display: 'A simple utility to get the monorepo root'
	},
	{
		name: 'pm-info',
		pkgName: '@node-kit/pm-info',
		iife: false,
		display: 'A simple utility to get the package manager information which used in the project'
	},
	{
		name: 'which-pm',
		pkgName: '@node-kit/which-pm',
		iife: false,
		display: 'A simple utility to get which package manager used in the project'
	}
]
