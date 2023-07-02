import lcid from 'lcid'
import { execa, execaSync } from '@node-kit/extra.cp'

export type Lang = 'en-US' | 'zh-CN' | string

const defaultLang: Lang = 'en-US'
let cache: string

/**
 * osLang
 *
 * @param cwd - the pkg path
 * @returns result - WorkspaceRootResult | null
 */
async function osLang() {
	if (cache) return cache

	let locale

	try {
		const envLocale = getEnvLang()

		if (envLocale) {
			locale = envLocale
		} else if (process.platform === 'win32') {
			locale = await getWinLang()
		} else if (process.platform === 'darwin') {
			locale = await getMacLang()
		} else {
			locale = await getUnixLang()
		}
	} catch {}

	cache = normalize(locale || defaultLang)
	return cache
}

/**
 * osLangSync
 *
 * @returns result - WorkspaceRootResult | null
 */
function osLangSync() {
	if (cache) return cache

	let locale
	try {
		const envLocale = getEnvLang()

		if (envLocale) {
			locale = envLocale
		} else if (process.platform === 'win32') {
			locale = getWinLangSync()
		} else if (process.platform === 'darwin') {
			locale = getMacLangSync()
		} else {
			locale = getUnixLangSync()
		}
	} catch {}

	cache = normalize(locale || defaultLang)
	return cache
}

/**
 * get windows lang
 *
 * @public
 * @return - string
 */
async function getWinLang() {
	const { stdout } = await execa('wmic', ['os', 'get', 'locale'])

	return parseWinLocale(stdout as string)
}

/**
 * get windows lang sync
 *
 * @public
 * @return - string
 */
function getWinLangSync() {
	const stdout = execaSync('wmic', ['os', 'get', 'locale']) as string

	return parseWinLocale(stdout)
}

/**
 * get mac lang
 *
 * @public
 * @return - Promise<string>
 */
async function getMacLang() {
	const { stdout: lang } = await execa('defaults', ['read', '-globalDomain', 'AppleLocale'])
	const { stdout: locals } = await execa('locale', ['-a'])

	return getSupportedLang(lang as string, locals as string)
}

/**
 * get mac lang sync
 *
 * @public
 * @return - string
 */
function getMacLangSync() {
	const lang = execaSync('defaults', ['read', '-globalDomain', 'AppleLocale']) as string
	const locals = execaSync('locale', ['-a']) as string

	return getSupportedLang(lang, locals)
}

async function getUnixLang() {
	const { stdout } = await execa('locale')

	return parseUnixLocale(stdout as string)
}

function getUnixLangSync() {
	const stdout = execaSync('locale') as string
	return parseUnixLocale(stdout)
}

/**
 * get lang from ENV
 *
 * @public
 * @param env - process.env
 * @return - result
 */
function getEnvLang(env = process.env) {
	const lang = env.LC_ALL || env.LC_MESSAGES || env.LANG || env.LANGUAGE
	return lang ? lang.replace(/[.:].*/, '') : lang
}

/**
 * replace _ with -
 *
 * @private
 * @param input - input string
 * @return - result
 */
function normalize(input: string): string {
	return input.replace(/_/, '-')
}

/**
 * get supported lang for mac os
 *
 * @private
 * @param input - input string
 * @return - result
 */
function getSupportedLang(lang: string, langs = '') {
	return langs.includes(lang) ? lang : defaultLang
}

/**
 * get lang from lcidCode for windows
 *
 * @private
 * @param winLocalString - output of "wmic os get locale"
 * @return - result
 */
function parseWinLocale(winLocalString = '') {
	if (!winLocalString) return ''
	const lcidCode = Number.parseInt(winLocalString.replace('Locale', ''), 16)

	return lcid.from(lcidCode)
}

/**
 * parse local string for unix
 *
 * @private
 * @param unixLocalString - output of "locale"
 * @return - result
 */
function parseUnixLocale(unixLocalString = '') {
	const env: Record<string, string> = {}
	for (const definition of unixLocalString.split('\n')) {
		const [key, value] = definition.split('=')
		env[key] = value.replace(/^"|"$/g, '')
	}

	return getEnvLang(env)
}

export {
	osLang,
	osLangSync,
	getWinLang,
	getWinLangSync,
	getMacLang,
	getMacLangSync,
	getUnixLang,
	getUnixLangSync,
	getEnvLang
}
