#!/usr/bin/env node

import { parseArgs } from '@pkgjs/parseargs'
import { whatPMSync } from '../dist/index.mjs'

const options = {
	'with-ver': { type: 'boolean' },
	json: { type: 'boolean' }
}

const { values } = parseArgs({
	args: process.argv.slice(2),
	options
})

const info = whatPMSync(process.cwd())

if (values.json) console.info(info)
else if (values['with-ver']) console.info(info.name + '@' + info.version)
else console.info(info.name)
