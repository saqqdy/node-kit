import type { PackageManifest } from './types'

export const packages: PackageManifest[] = [
	{
		name: 'utils',
		pkgName: '@node-kit/utils',
		iife: false,
		browser: false,
		display: 'Some shared utilities'
	},
	{
		name: 'extra.fs',
		pkgName: '@node-kit/extra.fs',
		iife: false,
		browser: false,
		display: 'Some shared extra utilities for nodejs build-in fs modules'
	},
	{
		name: 'extra.path',
		pkgName: '@node-kit/extra.path',
		iife: false,
		browser: false,
		display: 'Some shared extra utilities for nodejs build-in path modules'
	},
	{
		name: 'extra.cp',
		pkgName: '@node-kit/extra.cp',
		iife: false,
		browser: false,
		display: 'Some shared extra utilities for nodejs build-in child_process modules'
	},
	{
		name: 'lerna-workspace-root',
		pkgName: '@node-kit/lerna-workspace-root',
		iife: false,
		browser: false,
		display: 'A simple utility to get the lerna workspace root'
	},
	{
		name: 'lerna-workspace-info',
		pkgName: '@node-kit/lerna-workspace-info',
		iife: false,
		browser: false,
		display: 'A simple utility to get the lerna workspace information'
	},
	{
		name: 'pnpm-workspace-root',
		pkgName: '@node-kit/pnpm-workspace-root',
		iife: false,
		browser: false,
		display: 'A simple utility to get the pnpm workspace root'
	},
	{
		name: 'pnpm-workspace-info',
		pkgName: '@node-kit/pnpm-workspace-info',
		iife: false,
		browser: false,
		display: 'A simple utility to get the pnpm workspace information'
	},
	{
		name: 'yarn-workspace-root',
		pkgName: '@node-kit/yarn-workspace-root',
		iife: false,
		browser: false,
		display: 'A simple utility to get the yarn workspace root'
	},
	{
		name: 'yarn-workspace-info',
		pkgName: '@node-kit/yarn-workspace-info',
		iife: false,
		browser: false,
		display: 'A simple utility to get the yarn workspace information'
	},
	{
		name: 'workspace-info',
		pkgName: '@node-kit/workspace-info',
		iife: false,
		browser: false,
		display: 'A simple utility to get the workspace information'
	},
	{
		name: 'workspace-root',
		pkgName: 'workspace-root',
		iife: false,
		browser: false,
		display: 'A simple utility to get the workspace root'
	},
	{
		name: 'monorepo-root',
		pkgName: 'monorepo-root',
		iife: false,
		browser: false,
		display: 'A simple utility to get the monorepo root'
	},
	{
		name: 'workspace-projects',
		pkgName: 'workspace-projects',
		iife: false,
		browser: false,
		display: 'A simple utility to get the workspace project list'
	},
	{
		name: 'workspace-pkgs',
		pkgName: 'workspace-pkgs',
		iife: false,
		browser: false,
		display: 'A simple utility to get the workspace project list'
	},
	{
		name: 'pm-info',
		pkgName: 'pm-info',
		iife: false,
		browser: false,
		display: 'A simple utility to get the package manager information which used in the project'
	},
	{
		name: 'which-pm',
		pkgName: '@node-kit/which-pm',
		iife: false,
		browser: false,
		display: 'A simple utility to get which package manager used in the project'
	},
	{
		name: 'what-pm',
		pkgName: 'what-pm',
		iife: false,
		browser: false,
		display: 'Detects what package manager was used for installation'
	},
	{
		name: 'os-lang',
		pkgName: 'os-lang',
		iife: false,
		browser: false,
		display: 'Get the system lang'
	},
	{
		name: 'monorepo',
		pkgName: '@node-kit/monorepo',
		build: false,
		display: 'Some simple utilities for nodejs'
	}
]

export const packageNames = packages.map(({ pkgName }) => pkgName)

export function getPackages(name?: string | string[]) {
	if (!name) return packages

	const list = packages.filter(item => ([] as string[]).concat(name).includes(item.name))
	if (list.length === 0) {
		console.info(`no package founded`)
		return packages
	}

	return list
}
