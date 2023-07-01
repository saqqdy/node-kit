export interface PackageManifest {
	name: string
	pkgName: string
	display: string
	addon?: boolean
	description?: string
	external?: string[]
	externalUmd?: string[]
	globals?: Record<string, string>
	manualImport?: boolean
	deprecated?: boolean
	build?: boolean
	iife?: boolean
	iifeName?: string
	cjs?: boolean
	mjs?: boolean
	browser?: boolean
	bundler?: boolean
	types?: boolean
	extractTypes?: boolean
	// submodules?: boolean
	target?: string // esbuild target
}
