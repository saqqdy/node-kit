<div style="text-align: center;" align="center">

# @node-kit/extra.fs

Some shared extra utilities for nodejs build-in fs modules

[![NPM version][npm-image]][npm-url]
[![Codacy Badge][codacy-image]][codacy-url]
[![Test coverage][codecov-image]][codecov-url]
[![npm download][download-image]][download-url]
[![License][license-image]][license-url]

[![Sonar][sonar-image]][sonar-url]

</div>

## Install

```bash
# use pnpm
$ pnpm install -D @node-kit/extra.fs

# use yarn
$ yarn add -D @node-kit/extra.fs

# use npm
$ npm install -D @node-kit/extra.fs
```

## Usage

```js
import { functionName } from '@node-kit/extra.fs'

// run functionName
functionName()
```

## Function list

### 1. cp & cpSync

copy files to new path

- Usage: `cp(path, target[, options])` & `cpSync(path, target[, options])`
- Parameters:

<div class="table-prop">

| Param   | Description  | Type                     | Optional value | Required | Default value |
| ------- | ------------ | ------------------------ | -------------- | -------- | ------------- |
| path    | from path    | `PathLike \| PathLike[]` | -              | `true`   | -             |
| target  | target path  | `PathLike`               | -              | `true`   | -             |
| options | copy options | `CpOptions`              | -              | `false`  | `{}`          |

</div>

- Types:

```ts
interface CpOptions extends RmDirOptions {
  force?: boolean
}

declare function cp(
  paths: PathLike | PathLike[],
  target: PathLike,
  options?: CpOptions
): Promise<void>

declare function cpSync(paths: PathLike | PathLike[], target: PathLike, options?: CpOptions): void
```

- Demos:

1. copy ./a to ./b

```ts
import { cp, cpSync } from '@node-kit/extra.fs'

cp('./a', './b').then(() => {
  console.log('copy done')
})
// or
cpSync('./a', './b')
```

2. copy ./a and ./b to ./c

```ts
import { cp, cpSync } from '@node-kit/extra.fs'

cp(['./a', './b'], './c').then(() => {
  console.log('copy done')
})
// or
cpSync(['./a', './b'], './c')
```

### 2. rm & rmSync

remove files

- Usage: `rm(path[, options])` & `rmSync(path[, options])`
- Parameters:

<div class="table-prop">

| Param   | Description    | Type                     | Optional value | Required | Default value |
| ------- | -------------- | ------------------------ | -------------- | -------- | ------------- |
| path    | from path      | `PathLike \| PathLike[]` | -              | `true`   | -             |
| options | remove options | `RmOptions`              | -              | `false`  | `{}`          |

</div>

- Types:

```ts
interface RmOptions extends RmDirOptions {
  force?: boolean
}

declare function rm(paths: PathLike | PathLike[], options?: RmOptions): Promise<void>

declare function rmSync(paths: PathLike | PathLike[], options?: RmOptions): void
```

- Demos:

1. remove ./a

```ts
import { rm, rmSync } from '@node-kit/extra.fs'

rm('./a', './b').then(() => {
  console.log('remove done')
})
// or
rmSync('./a', './b')
```

2. remove ./a and ./b

```ts
import { rm, rmSync } from '@node-kit/extra.fs'

rm(['./a', './b']).then(() => {
  console.log('remove done')
})
// or
rmSync(['./a', './b'])
```

### 3. mv & mvSync

move files to new path

- Usage: `mv(path, target[, options])` & `mvSync(path, target[, options])`
- Parameters:

<div class="table-prop">

| Param   | Description  | Type                     | Optional value | Required | Default value |
| ------- | ------------ | ------------------------ | -------------- | -------- | ------------- |
| path    | from path    | `PathLike \| PathLike[]` | -              | `true`   | -             |
| target  | target path  | `PathLike`               | -              | `true`   | -             |
| options | move options | `MvOptions`              | -              | `false`  | `{}`          |

</div>

- Types:

```ts
interface MvOptions extends RmDirOptions {
  force?: boolean
}

declare function mv(
  paths: PathLike | PathLike[],
  target: PathLike,
  options?: MvOptions
): Promise<void>

declare function mvSync(paths: PathLike | PathLike[], target: PathLike, options?: MvOptions): void
```

- Demos:

1. move ./a to ./b

```ts
import { mv, mvSync } from '@node-kit/extra.fs'

mv('./a', './b').then(() => {
  console.log('move done')
})
// or
mvSync('./a', './b')
```

2. move ./a and ./b to ./c

```ts
import { mv, mvSync } from '@node-kit/extra.fs'

mv(['./a', './b'], './c').then(() => {
  console.log('move done')
})
// or
mvSync(['./a', './b'], './c')
```

### 4. readJSON & readJSONSync

read json file

- Usage: `readJSON(path[, options])` & `readJSONSync(path[, options])`
- Parameters:

<div class="table-prop">

| Param   | Description       | Type                                     | Optional value | Required | Default value |
| ------- | ----------------- | ---------------------------------------- | -------------- | -------- | ------------- |
| path    | json path         | `PathLike`                               | -              | `true`   | -             |
| options | read file options | `ReadJSONOptions \| ReadJSONSyncOptions` | -              | `false`  | `null`        |

</div>

- Types:

```ts
type ReadJSONOptions = Parameters<typeof promises.readFile>[1]

type ReadJSONSyncOptions = Parameters<typeof promises.readFileSync>[1]

declare function readJSON(
  ...args: Parameters<typeof promises.readFile>
): Promise<Record<string, unknown> | null>

declare function readJSONSync(
  ...args: Parameters<typeof readFileSync>
): Record<string, unknown> | null
```

- Demos:

1. read ./a.json

```ts
import { readJSON, readJSONSync } from '@node-kit/extra.fs'

readJSON('./a.json').then(data => {
  console.log(data)
})
// or
const data = readJSONSync('./a.json')
```

### 5. writeJSON & writeJSONSync

write json to file

- Usage: `writeJSON(path, data[, options])` & `writeJSONSync(path, data[, options])`
- Parameters:

<div class="table-prop">

| Param   | Description        | Type                                 | Optional value | Required | Default value |
| ------- | ------------------ | ------------------------------------ | -------------- | -------- | ------------- |
| path    | json path          | `PathLike`                           | -              | `true`   | -             |
| data    | json data          | `WriteJSONData \| WriteJSONSyncData` | -              | `true`   | -             |
| options | write file options | `WriteFileOptions`                   | -              | `false`  | `null`        |

</div>

- Types:

```ts
type WriteJSONData = Record<string, unknown> | Parameters<typeof promises.writeFile>[1]

type WriteJSONSyncData = Record<string, unknown> | Parameters<typeof promises.writeFileSync>[1]

declare function writeJSON(
  file: Parameters<typeof promises.writeFile>[0],
  data: Record<string, unknown> | Parameters<typeof promises.writeFile>[1],
  options?: WriteFileOptions
): Promise<void>

declare function writeJSONSync(
  file: PathOrFileDescriptor,
  data: Record<string, unknown> | Parameters<typeof writeFileSync>[1],
  options?: WriteFileOptions
): void
```

- Demos:

1. write data to ./a.json

```ts
import { writeJSON, writeJSONSync } from '@node-kit/extra.fs'

writeJSON('./a.json', { name: 'saqqdy' }).then(data => {
  console.log(data)
})
// or
const data = writeJSONSync('./a.json', { name: 'saqqdy' })
```

### 6. getRealPath & getRealPathSync

return the canonicalized absolute pathname

- Usage: `getRealPath(path)` & `getRealPathSync(path)`
- Parameters:

<div class="table-prop">

| Param | Description | Type       | Optional value | Required | Default value |
| ----- | ----------- | ---------- | -------------- | -------- | ------------- |
| path  | simple path | `PathLike` | -              | `true`   | -             |

</div>

- Types:

```ts
declare function getRealPath(path: string): Promise<string>

declare function getRealPathSync(path: string): string
```

- Demos:

1. simple use

```ts
import { getRealPath, getRealPathSync } from '@node-kit/extra.fs'

getRealPath('./a.json').then(data => {
  console.log(data)
})
// or
const data = getRealPathSync('./a.json')
```

## Issues & Support

Please open an issue [here](https://github.com/saqqdy/node-kit/issues).

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/@node-kit/extra.fs.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@node-kit/extra.fs
[codacy-image]: https://app.codacy.com/project/badge/Grade/f70d4880e4ad4f40aa970eb9ee9d0696
[codacy-url]: https://www.codacy.com/gh/saqqdy/@node-kit/extra.fs/dashboard?utm_source=github.com&utm_medium=referral&utm_content=saqqdy/@node-kit/extra.fs&utm_campaign=Badge_Grade
[codecov-image]: https://img.shields.io/codecov/c/github/saqqdy/@node-kit/extra.fs.svg?style=flat-square
[codecov-url]: https://codecov.io/github/saqqdy/@node-kit/extra.fs?branch=master
[download-image]: https://img.shields.io/npm/dm/@node-kit/extra.fs.svg?style=flat-square
[download-url]: https://npmjs.org/package/@node-kit/extra.fs
[license-image]: https://img.shields.io/badge/License-MIT-blue.svg
[license-url]: LICENSE
[sonar-image]: https://sonarcloud.io/api/project_badges/quality_gate?project=saqqdy_node-kit
[sonar-url]: https://sonarcloud.io/dashboard?id=saqqdy_node-kit
