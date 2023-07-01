import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const ROOT_PATH = resolve(__dirname, '..', '..')

export const PACKAGE_PATH = join(ROOT_PATH, 'packages')
