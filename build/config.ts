const { resolve } = require('path')
const pkg = require('../package.json')

export const banner =
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
export const bannerText =
	pkg.name +
	' v' +
	pkg.version +
	'\n' +
	pkg.description +
	'\n' +
	'(c) 2021-' +
	new Date().getFullYear() +
	' saqqdy<https://github.com/saqqdy> \n' +
	'Released under the MIT License.'

export const extensions = [
	'.js',
	'.jsx',
	'.mjs',
	'.cjs',
	'.ts',
	'.tsx',
	'.mts',
	'.cts',
	'.es6',
	'.es',
	'.json'
]

export const alias = {
	'@': resolve(__dirname, '../src'),
	'node-kit': resolve(__dirname, './')
}

export const jsexclude = /node_modules/
