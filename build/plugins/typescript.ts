import _typescript, { type RollupTypescriptPluginOptions } from '@rollup/plugin-typescript'
import type { Plugin } from 'rollup'

const typescript = (options: RollupTypescriptPluginOptions = {}): Plugin =>
	_typescript(
		Object.assign(
			{
				compilerOptions: {
					declaration: false
				}
			},
			options
		)
	)

export default typescript
