import { resolve, sep } from 'path'
import fg from 'fast-glob'
import type { OutputOptions, RollupOptions } from 'rollup'
import { packages } from './packages'
import { banner as bannerPlugin, esbuild, filesize, minify, nodeResolve } from './plugins'

const options: RollupOptions[] = []
const externals = ['js-cool']

for (const {
	globals = {},
	name,
	external = [],
	submodules,
	iife,
	build,
	cjs,
	mjs,
	// dts,
	target,
	exportType = 'auto'
} of packages) {
	if (build === false) continue
	const dirName = name.replace(/\./g, sep)
	const pkg = require(`packages/${dirName}/package.json`)
	const banner =
		'/*!\n' +
		' * ' +
		pkg.name +
		' v' +
		pkg.version +
		'\n' +
		' * ' +
		pkg.description +
		'\n' +
		' * (c) 2021-' +
		new Date().getFullYear() +
		' saqqdy<https://github.com/saqqdy> \n' +
		' * Released under the MIT License.\n' +
		' */'
	const iifeGlobals = {
		'js-cool': 'JsCool',
		...globals
	}
	const iifeName = 'NodeKit'
	const functionNames = ['index.ts']

	// submodules
	if (submodules) {
		functionNames.push(
			...fg.sync('*/index.ts', {
				cwd: resolve(`packages/${dirName}`),
				ignore: ['dist']
			})
		)
	}

	for (const fn of functionNames) {
		const input =
			fn === 'index.ts' ? `packages/${dirName}/index.ts` : `packages/${dirName}/${fn}`
		const output: OutputOptions[] = []
		// output mjs
		if (mjs !== false) {
			output.push({
				file: `packages/${dirName}/dist/${fn.replace(/\.ts$/, '.mjs')}`,
				exports: exportType,
				banner,
				format: 'es'
			})
		}
		// output cjs
		if (cjs !== false) {
			output.push({
				file: `packages/${dirName}/dist/${fn.replace(/\.ts$/, '.cjs')}`,
				exports: exportType,
				banner,
				format: 'cjs'
			})
		}
		// output iife
		if (iife !== false && fn === 'index.ts') {
			output.push(
				{
					file: `packages/${dirName}/dist/${fn}.iife.js`,
					format: 'iife',
					name: iifeName,
					extend: true,
					globals: iifeGlobals,
					banner,
					plugins: [
						// injectNodeKitCore,
					]
				},
				{
					file: `packages/${dirName}/dist/${fn}.iife.min.js`,
					format: 'iife',
					name: iifeName,
					extend: true,
					globals: iifeGlobals,
					plugins: [
						// injectNodeKitCore,
						minify({
							minify: true
						}),
						bannerPlugin({
							content: banner
						})
					]
				}
			)
		}

		// create library options
		options.push({
			input,
			output,
			plugins: [nodeResolve, target ? esbuild({ target }) : esbuild(), filesize],
			external: [...externals, ...external]
		})
	}
}

export default options
