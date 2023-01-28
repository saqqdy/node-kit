import { resolve, sep } from 'path'
import { execSync } from 'child_process'
import { promises, readFileSync, writeFileSync } from 'fs'
import { packages } from '../build/packages'
import { version } from '../package.json'

async function updatePackageJSON() {
	for (const { name, display, author, iife } of packages) {
		if (name === 'monorepo') continue
		const dirName = name.replace(/\./g, sep)
		const packageRoot = resolve(__dirname, '..', 'packages', dirName)
		const packageJSONPath = resolve(packageRoot, 'package.json')
		const packageJSON = JSON.parse(readFileSync(packageJSONPath, 'utf8'))
		packageJSON.version = version
		packageJSON.description = display || packageJSON.description
		packageJSON.author = author || 'saqqdy <https://github.com/saqqdy>'
		packageJSON.bugs = {
			url: 'https://github.com/saqqdy/node-kit/issues'
		}
		packageJSON.homepage =
			name === 'core'
				? 'https://github.com/saqqdy/node-kit#readme'
				: `https://github.com/saqqdy/node-kit/tree/master/packages/${dirName}#readme`
		packageJSON.repository = {
			type: 'git',
			url: 'git+https://github.com/saqqdy/node-kit.git',
			directory: `packages/${dirName}`
		}
		// packageJSON.main = './index.js'
		// packageJSON.types = './index.d.ts'
		// packageJSON.module = './index.mjs'
		if (iife !== false) {
			packageJSON.unpkg = './index.iife.min.js'
			packageJSON.jsdelivr = './index.iife.min.js'
		}
		// packageJSON.exports = {
		//     '.': {
		//         import: './index.mjs',
		//         require: './index.cjs',
		//         types: './index.d.ts'
		//     },
		//     './*': './*',
		//     ...packageJSON.exports
		// }
		writeFileSync(packageJSONPath, JSON.stringify(packageJSON, null, 4))
	}
}

async function run() {
	await updatePackageJSON()
	await promises.copyFile('./CONTRIBUTING.md', './packages/contributing.md')
	execSync('pnpm run prettier')
}

run()
