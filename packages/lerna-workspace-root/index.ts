import { join } from 'path'
import { findUp, findUpSync } from 'find-up'
import { readJSON, readJSONSync } from '@node-kit/utils'
import type { Lerna, Ref, Result } from './utils/types'
import { lernalize, rollup } from './utils'

async function lernaWorkspaceRoot(cwd: string): Promise<Result> {
	const ref: Ref = { cwd }
	let ret: Result | undefined

	await findUp(
		async parent => {
			ret = await findLerna(parent)
			return ret && ret.dir
		},
		{ cwd, type: 'directory' }
	)

	return rollup(ret, ref)
}

function lernaWorkspaceRootSync(cwd: string): Result {
	const ref: Ref = { cwd }
	let ret: Result | undefined

	findUpSync(
		parent => {
			ret = findLernaSync(parent)
			return ret && ret.dir
		},
		{ cwd, type: 'directory' }
	)

	return rollup(ret, ref)
}

function findLernaSync(dir: string) {
	const lerna = readJSONSync(join(dir, 'lerna.json')) as Lerna
	return lernalize(dir, lerna)
}

async function findLerna(dir: string) {
	const lerna = (await readJSON(join(dir, 'lerna.json'))) as Lerna
	return lernalize(dir, lerna)
}

export { lernaWorkspaceRootSync, lernaWorkspaceRoot, lernaWorkspaceRoot as default }
