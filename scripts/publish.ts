import { execSync } from 'child_process'
import { join, sep } from 'path'
import consola from 'consola'
import { readJSONSync, writeJSONSync } from '@node-kit/extra.fs'
import { version } from '../package.json'
import { packages } from '../build/packages'

export const ROOT = join(__dirname, '..')
export const PACKAGE = join(ROOT, 'packages')

const REGISTRY_URL = 'https://registry.npmjs.org'
let command = `npm --registry=${REGISTRY_URL} publish --access public`

if (version.includes('rc')) command += ' --tag release'
if (version.includes('beta')) command += ' --tag beta'
if (version.includes('alpha')) command += ' --tag alpha'

for (const { name, pkgName } of packages) {
	const dirName = name.replace(/\./g, sep)
	const cwd = name === 'monorepo' ? ROOT : join(PACKAGE, dirName)
	const PKG_FILE = join(cwd, 'package.json')
	const pkgJson = readJSONSync(PKG_FILE)
	const newPkgJson = JSON.parse(JSON.stringify(pkgJson))
	for (const { pkgName: pkg } of packages) {
		if (pkg in ((newPkgJson.dependencies as Record<string, unknown>) || {})) {
			newPkgJson.dependencies[pkg] = version
		}
		if (pkg in ((newPkgJson.devDependencies as Record<string, unknown>) || {})) {
			newPkgJson.devDependencies[pkg] = version
		}
		if (pkg in ((newPkgJson.peerDependencies as Record<string, unknown>) || {})) {
			newPkgJson.peerDependencies[pkg] = version
		}
	}
	writeJSONSync(PKG_FILE, newPkgJson, {
		encoding: 'utf8'
	})
	execSync(command, {
		stdio: 'inherit',
		cwd
	})
	writeJSONSync(PKG_FILE, pkgJson, {
		encoding: 'utf8'
	})
	execSync(`npx prettier --write ${PKG_FILE}`, {
		stdio: 'inherit',
		cwd: ROOT
	})
	consola.success(`Published ${pkgName}`)
}
