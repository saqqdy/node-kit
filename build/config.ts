import pkg from '../package.json' assert { type: 'json' }

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
	' * (c) 2022-' +
	new Date().getFullYear() +
	' saqqdy<https://github.com/saqqdy> \n' +
	' * Released under the MIT License.\n' +
	' */'

export const version = pkg.version

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
