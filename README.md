<div style="text-align: center;" align="center">

# @node-kit/monorepo

Some simple utilities for nodejs

[![NPM version][npm-image]][npm-url]
[![Codacy Badge][codacy-image]][codacy-url]
[![License][license-image]][license-url]

[![Sonar][sonar-image]][sonar-url]

</div>

## Function list

- some shared utilities: [utils](https://github.com/saqqdy/node-kit/tree/master/packages/utils)
- find lerna workspace root: [lerna-workspace-root](https://github.com/saqqdy/node-kit/tree/master/packages/lerna-workspace-root)
- find pnpm workspace root: [pnpm-workspace-root](https://github.com/saqqdy/node-kit/tree/master/packages/pnpm-workspace-root)
- find yarn workspace root: [yarn-workspace-root](https://github.com/saqqdy/node-kit/tree/master/packages/yarn-workspace-root)
- find workspace root: [workspace-root](https://github.com/saqqdy/node-kit/tree/master/packages/workspace-root)
- find monorepo root (alias of workspace-root): [monorepo-root](https://github.com/saqqdy/node-kit/tree/master/packages/monorepo-root)
- get workspace project list: [workspace-projects](https://github.com/saqqdy/node-kit/tree/master/packages/workspace-projects)
- get workspace info: [workspace-info](https://github.com/saqqdy/node-kit/tree/master/packages/workspace-info)
- find the package manager information: [pm-info](https://github.com/saqqdy/node-kit/tree/master/packages/pm-info)
- find which package manager used in the project: [which-pm](https://github.com/saqqdy/node-kit/tree/master/packages/which-pm)

## Install

e.g: use `@node-kit/workspace-root`

```shell
# by pnpm
pnpm install @node-kit/workspace-root

# by npm
npm install -D @node-kit/workspace-root

# by yarn
yarn add @node-kit/workspace-root
```

## Usage

```js
import { workspaceRoot } from '@node-kit/workspace-root'

workspaceRoot().then(path => {
  console.log('The workspace root is: ', path) // /Users/user/path/of/package/root or null
})
```

## Issues & Support

Please open an issue [here](https://github.com/saqqdy/node-kit/issues).

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/@node-kit/monorepo.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@node-kit/monorepo
[codacy-image]: https://app.codacy.com/project/badge/Grade/f70d4880e4ad4f40aa970eb9ee9d0696
[codacy-url]: https://www.codacy.com/gh/saqqdy/@node-kit/monorepo/dashboard?utm_source=github.com&utm_medium=referral&utm_content=saqqdy/@node-kit/monorepo&utm_campaign=Badge_Grade
[license-image]: https://img.shields.io/badge/License-MIT-blue.svg
[license-url]: LICENSE
[sonar-image]: https://sonarcloud.io/api/project_badges/quality_gate?project=saqqdy_node-kit
[sonar-url]: https://sonarcloud.io/dashboard?id=saqqdy_node-kit
