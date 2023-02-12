import { existsSync, lstatSync, promises, readdirSync, rmdirSync, unlinkSync } from 'fs'
import { join } from 'path'

/**
 * remove file
 *
 * @param path - path or file
 */
export async function rm(path: string) {
	if (!existsSync(path)) {
		console.error(new Error(`${path} is not exists`))
		return
	}

	const { isDirectory } = await promises.lstat(path)

	// path is dir
	if (isDirectory()) {
		const files = (await promises.readdir(path)) || []
		for (const fileName of files) {
			const _p = join(path, fileName)
			const { isDirectory } = await promises.lstat(_p)

			if (isDirectory()) {
				await rm(_p)
				// 文件夹内部文件删除完成之后，删除文件夹
				await promises.rmdir(_p)
			} else {
				await promises.unlink(_p)
			}
		}
	} else {
		await promises.unlink(path)
	}
}

/**
 * remove file sync
 *
 * @param path - path or file
 */
export function rmSync(path: string) {
	// 判断一下路径是否真实存在
	if (!existsSync(path)) {
		console.warn(new Error('路径不存在。'))
		return
	}

	const file = lstatSync(path)

	// 是文件，直接删除
	if (file.isFile()) {
		unlinkSync(path)
		return
	}

	// 是文件夹，遍历下面的所有文件
	if (file.isDirectory()) {
		const files = readdirSync(path)
		if (files && files.length) {
			for (const fileName of files) {
				// 因为我之前项目使用的时候不想删除隐藏文件，所以在此过滤了.开头的文件
				if (fileName.startsWith('.')) {
					continue
				}
				const p = join(path, fileName)
				const f = lstatSync(p)
				// 是文件，直接删除
				if (f.isFile()) {
					unlinkSync(p)
				}
				// 是文件夹，递归调用 deleteFiles
				if (f.isDirectory()) {
					rmSync(p)
					// 文件夹内部文件删除完成之后，删除文件夹
					rmdirSync(p)
				}
			}
		}
	}
}

export default {
	rm,
	rmSync
}
