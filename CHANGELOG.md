# Change Logs

## 2024.11.26 v3.3.1

1. document work

## 2024.11.21 v3.3.0

1. compatible for yarn workspaces.nohoist
2. Detect bun

## 2023.08.28 v3.2.0

1. fix bugs
2. upgrade all packages

## 2023.07.10 v3.1.1

1. Experience optimizations for `extra.fs`
2. drop rimraf

## 2023.07.05 v3.1.0

1. add support running in terminal from `what-pm`
2. external tslib package

## 2023.07.02 v3.0.0

1. new package `os-local`, api docs: [README.md](https://github.com/saqqdy/node-kit/tree/master/packages/os-lang#readme)
2. new package `@node-kit/extra.cp`, api docs: [README.md](https://github.com/saqqdy/node-kit/tree/master/packages/extra/cp#readme)
3. Add support for rm/cp/mv in `extra.fs` to pass in the silent parameter, if it is true, the execution process will not output logs.
4. band new outputs & band new build scripts
5. use esbuild
6. set sideEffects false
7. upgrade all packages

## 2023.04.24 v2.5.1

1. some docs work

## 2023.04.22 v2.5.0

1. Added `mv` and `mvSync` to `@node-kit/extra.fs`
2. docs work for extra.fs

## 2023.04.20 v2.4.0

1. Added `cp` and `cpSync` to `@node-kit/extra.fs`
2. upgrade all packages

## 2023.03.01 v2.3.0

1. Added `rm` and `rmSync` to `@node-kit/extra.fs`
2. fix dependencies
3. upgrade all packages

## 2023.02.04 v2.2.1

1. upgrade `reinstaller`
2. some docs work

## 2023.02.03 v2.2.0

1. add `what-pm`, api docs: [README.md](https://github.com/saqqdy/node-kit/tree/master/packages/what-pm#readme)
2. some docs work
3. fix bugs

## 2023.02.03 v2.1.0

1. fix dependencies
2. upgrade all packages

## 2023.01.29 v2.0.0

1. add `workspace-pkgs`, api docs: [README.md](https://github.com/saqqdy/node-kit/tree/master/packages/workspace-pkgs#readme)
2. add `@node-kit/extra.fs`, api docs: [README.md](https://github.com/saqqdy/node-kit/tree/master/packages/extra/fs#readme)
3. add `@node-kit/extra.path`, api docs: [README.md](https://github.com/saqqdy/node-kit/tree/master/packages/extra/path#readme)
4. deprecate `@node-kit/workspace-root` move to `workspace-root`
5. deprecate `@node-kit/pm-info` move to `pm-info`
6. upgrade all packages

## 2023.01.23 v1.3.4

1. use `reinstaller`: [reinstaller](https://github.com/saqqdy/reinstaller)
2. upgrade all packages

## 2023.01.22 v1.3.3

1. fix `pnpm-workspace-info` bugs

## 2023.01.22 v1.3.2

1. fix `lerna-workspace-info` `pnpm-workspace-info` `yarn-workspace-info` to get dirname

## 2023.01.22 v1.3.1

1. fix `lerna-workspace-info` `pnpm-workspace-info` `yarn-workspace-info` to return null

## 2023.01.22 v1.3.0

1. add `workspace-projects`, api docs: [README.md](https://github.com/saqqdy/node-kit/tree/master/packages/workspace-projects#readme)
2. add `lerna-workspace-info`, api docs: [README.md](https://github.com/saqqdy/node-kit/tree/master/packages/lerna-workspace-info#readme)
3. add `pnpm-workspace-info`, api docs: [README.md](https://github.com/saqqdy/node-kit/tree/master/packages/pnpm-workspace-info#readme)
4. add `yarn-workspace-info`, api docs: [README.md](https://github.com/saqqdy/node-kit/tree/master/packages/yarn-workspace-info#readme)
5. add `workspace-info`, api docs: [README.md](https://github.com/saqqdy/node-kit/tree/master/packages/workspace-info#readme)

## 2023.01.18 v1.2.1

1. fix `which-pm` bin path error
2. add `whichpm` bin path

## 2023.01.18 v1.2.0

1. add `which-pm`, api docs: [README.md](https://github.com/saqqdy/node-kit/tree/master/packages/which-pm#readme)
2. use module type

## 2023.01.18 v1.1.0

1. add `pm-info`, api docs: [README.md](https://github.com/saqqdy/node-kit/tree/master/packages/pm-info#readme)

## 2023.01.18 v1.0.0

1. add `utils` `lerna-workspace-root` `pnpm-workspace-root` `yarn-workspace-root` `workspace-root` `monorepo-root` `which-pm` `pm-info`
2. api docs: [README.md](./README.md)
