import { resolve, sep } from 'node:path'
import assert from 'assert'
import { execSync } from 'node:child_process'
import { promises } from 'node:fs'
// import fg from 'fast-glob'
import consola from 'consola'
// import { readJSONSync, writeJSONSync } from '@node-kit/extra.fs'
import { packages } from '../build/packages'
// import { version } from '../package.json'

const rootDir = resolve(__dirname, '..')
const watch = process.argv.includes('--watch')

const FILES_COPY_ROOT = ['LICENSE']
// const FILES_COPY_LOCAL = ['README.md', '*.cjs', '*.mjs', '*.d.ts']

assert(process.cwd() !== __dirname)

async function buildMetaFiles() {
	for (const { name } of packages) {
		if (name === 'monorepo') continue
		const dirName = name.replace(/\./g, sep)
		const packageRoot = resolve(__dirname, '..', 'packages', dirName)
		// const packageDist = resolve(packageRoot, 'dist')

		if (name === 'core')
			await promises.copyFile(
				resolve(rootDir, 'README.md'),
				resolve(packageRoot, 'README.md')
			)

		for (const file of FILES_COPY_ROOT)
			await promises.copyFile(resolve(rootDir, file), resolve(packageRoot, file))

		// const files = await fg(FILES_COPY_LOCAL, { cwd: packageRoot })
		// for (const file of files)
		// 	await promises.copyFile(resolve(packageRoot, file), resolve(packageDist, file))

		// const packageJSON: any = readJSONSync(join(packageRoot, 'package.json'), 'utf8')
		// for (const key of Object.keys(packageJSON.dependencies || {})) {
		// 	if (key.startsWith('@node-kit/')) packageJSON.dependencies[key] = version
		// }
		// for (const key of Object.keys(packageJSON.devDependencies || {})) {
		// 	if (key.startsWith('@node-kit/')) packageJSON.devDependencies[key] = version
		// }
		// writeJSONSync(join(packageDist, 'package.json'), packageJSON)
	}
}

async function build() {
	consola.info('Clean up')
	execSync('pnpm run clean', { stdio: 'inherit' })

	consola.info('Rollup')
	execSync(`pnpm run build:rollup${watch ? ' --watch' : ''}`, {
		stdio: 'inherit'
	})

	for (const { dts, name, extractType } of packages) {
		if (watch || name === 'monorepo') continue
		const dirName = name.replace(/\./g, sep)
		const cwd = resolve(__dirname, '..', 'packages', dirName)
		if (dts === false) continue
		consola.info(`Create types: packages/${dirName}`)
		execSync('npx tsc -p tsconfig.declaration.json', {
			stdio: 'inherit',
			cwd
		})
		if (extractType === false) continue
		execSync('npx api-extractor run', {
			stdio: 'inherit',
			cwd
		})
	}

	// consola.info("Fix types");
	// execSync("pnpm run types:fix", { stdio: "inherit" });

	await buildMetaFiles()
}

async function cli() {
	try {
		await build()
	} catch (e) {
		console.error(e)
		process.exit(1)
	}
}

export { build }

if (require.main === module) cli()
