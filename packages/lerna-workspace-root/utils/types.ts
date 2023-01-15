export type Client = 'bolt' | 'yarn' | 'pnpm' | 'lerna' | 'root'

export interface Result<T extends Client = Client> {
	client: T
	dir: string
}

export interface Lerna {
	useWorkspaces?: boolean
	packages?: string[]
}

export interface Pkg {
	workspaces?: any
	bolt?: any
}

export interface Ref {
	cwd: string
	/**
	 * The first package.json path in the parent dir
	 */
	pkg?: string
}
