import type { PackageManifest } from './types'

export const packages: PackageManifest[] = [
	{
		name: 'monorepo',
		pkgName: '@node-kit/monorepo',
		build: false,
		display: 'Some simple utilities for nodejs'
	},
	{
		name: 'utils',
		pkgName: '@node-kit/utils',
		iife: false,
		submodules: true,
		display: 'Some shared utilities'
	},
	{
		name: 'extra.fs',
		pkgName: '@node-kit/extra.fs',
		iife: false,
		submodules: true,
		display: 'Some shared extra utilities for nodejs build-in fs modules'
	},
	{
		name: 'extra.path',
		pkgName: '@node-kit/extra.path',
		iife: false,
		submodules: true,
		display: 'Some shared extra utilities for nodejs build-in path modules'
	},
	{
		name: 'lerna-workspace-root',
		pkgName: '@node-kit/lerna-workspace-root',
		iife: false,
		display: 'A simple utility to get the lerna workspace root'
	},
	{
		name: 'lerna-workspace-info',
		pkgName: '@node-kit/lerna-workspace-info',
		iife: false,
		display: 'A simple utility to get the lerna workspace information'
	},
	{
		name: 'pnpm-workspace-root',
		pkgName: '@node-kit/pnpm-workspace-root',
		iife: false,
		display: 'A simple utility to get the pnpm workspace root'
	},
	{
		name: 'pnpm-workspace-info',
		pkgName: '@node-kit/pnpm-workspace-info',
		iife: false,
		display: 'A simple utility to get the pnpm workspace information'
	},
	{
		name: 'yarn-workspace-root',
		pkgName: '@node-kit/yarn-workspace-root',
		iife: false,
		display: 'A simple utility to get the yarn workspace root'
	},
	{
		name: 'yarn-workspace-info',
		pkgName: '@node-kit/yarn-workspace-info',
		iife: false,
		display: 'A simple utility to get the yarn workspace information'
	},
	{
		name: 'workspace-info',
		pkgName: '@node-kit/workspace-info',
		iife: false,
		display: 'A simple utility to get the workspace information'
	},
	{
		name: 'workspace-root',
		pkgName: 'workspace-root',
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
		name: 'workspace-projects',
		pkgName: 'workspace-projects',
		iife: false,
		display: 'A simple utility to get the workspace project list'
	},
	{
		name: 'workspace-pkgs',
		pkgName: 'workspace-pkgs',
		iife: false,
		display: 'A simple utility to get the workspace project list'
	},
	{
		name: 'pm-info',
		pkgName: 'pm-info',
		iife: false,
		display: 'A simple utility to get the package manager information which used in the project'
	},
	{
		name: 'which-pm',
		pkgName: '@node-kit/which-pm',
		iife: false,
		display: 'A simple utility to get which package manager used in the project'
	},
	{
		name: 'what-pm',
		pkgName: 'what-pm',
		iife: false,
		display: 'Detects what package manager was used for installation'
	}
]
