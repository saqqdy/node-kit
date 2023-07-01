import chalk from 'chalk'

export function external(id: string) {
	return (
		/^vue/.test(id) || /^@node-kit\/core\//.test(id)
		//  || deps.some(k => new RegExp('^' + k).test(id))
	)
}

export const reporter = (opt: any, outputOptions: any, info: any) =>
	`${chalk.cyan(
		chalk.bold(
			outputOptions.file ? `${outputOptions.file.split('src/').pop()}` : info.fileName || ''
		)
	)}: bundle size ${chalk.yellow(info.bundleSize)} -> minified ${chalk.green(
		(info.minSize && `${info.minSize}`) || ''
	)}`
