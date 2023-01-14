import { readFileSync } from 'fs'
import type { Plugin } from 'rollup'

const injectNodeKitCore: Plugin = {
	name: 'inject-node-kit-core',
	renderChunk(code) {
		const ESLINT_SETS_CORE_IIFE = readFileSync(
			require.resolve('@node-kit/core/lib/index.iife.js'),
			'utf-8'
		)
		return `${ESLINT_SETS_CORE_IIFE};\n;${code}`
	}
}

export default injectNodeKitCore
