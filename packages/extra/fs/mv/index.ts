import { cp, cpSync } from '../cp'
import { rm, rmSync } from '../rm'

export async function mv(oldPath, newPath) {
	cp(oldPath, newPath).then(res => {
		rm(oldPath)
	})
}

export async function mvSync(oldPath, newPath) {
	cpSync(oldPath, newPath)
	rmSync(oldPath)
}

export default {
	mv,
	mvSync
}
