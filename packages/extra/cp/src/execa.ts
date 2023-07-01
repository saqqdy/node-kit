import { promisify } from 'node:util'
import cp from 'node:child_process'
import type {
	ExecFileOptions,
	ExecFileOptionsWithBufferEncoding,
	ExecFileOptionsWithStringEncoding,
	ExecFileSyncOptions,
	ExecFileSyncOptionsWithBufferEncoding,
	ExecFileSyncOptionsWithStringEncoding
} from 'node:child_process'
import type { ObjectEncodingOptions } from 'node:fs'

const execFile = promisify(cp.execFile)

/**
 * execa
 *
 * @param file - The name or path of the executable file to run.
 * @param args - List of string arguments.
 * @param options - Options for execFile
 * @returns The stdout from the command: \{Promise\<import('child_process').ChildProcess\>\}
 */
async function execa(
	file: string,
	args?: ReadonlyArray<string> | undefined | null,
	options?:
		| ExecFileOptions
		| ((ObjectEncodingOptions & ExecFileOptions) | undefined | null)
		| ExecFileOptionsWithBufferEncoding
		| ExecFileOptionsWithStringEncoding
) {
	const subprocess = await execFile(file, args, options || { encoding: 'utf8' })
	if (typeof subprocess.stdout === 'string') subprocess.stdout = subprocess.stdout.trim()
	return subprocess
}

/**
 * execaSync
 *
 * @param file - The name or path of the executable file to run.
 * @param args - List of string arguments.
 * @param options - Options for execFileSync
 * @returns The stdout from the command: Buffer | string
 */
function execaSync(
	file: string,
	args?: ReadonlyArray<string>,
	options?:
		| ExecFileSyncOptions
		| ExecFileSyncOptionsWithBufferEncoding
		| ExecFileSyncOptionsWithStringEncoding
) {
	const stdout = cp.execFileSync(
		file,
		args,
		options || {
			encoding: 'utf8',
			stdio: ['ignore', 'pipe', 'ignore']
		}
	)
	return typeof stdout === 'string' ? stdout.trim() : stdout
}

export { execa, execaSync }
