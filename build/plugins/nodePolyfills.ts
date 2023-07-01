import type { NodePolyfillsOptions } from 'rollup-plugin-polyfill-node'
import polyfills from 'rollup-plugin-polyfill-node'
import type { Plugin } from 'rollup'

const nodePolyfills = (options: NodePolyfillsOptions = {}): Plugin =>
	polyfills(Object.assign({}, options))

export default nodePolyfills
