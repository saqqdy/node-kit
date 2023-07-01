import injectCode, { type Options } from 'rollup-plugin-inject-code'
import type { Plugin } from 'rollup'

const injectEslintSetsCore = (options: Options): Plugin =>
	injectCode(
		Object.assign(
			{
				code: '',
				position: 'before'
			},
			options
		)
	)

export default injectEslintSetsCore
