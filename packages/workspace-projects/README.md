<div style="text-align: center;" align="center">

# workspace-projects

A simple utility to get the workspace project list

[![NPM version][npm-image]][npm-url]
[![Codacy Badge][codacy-image]][codacy-url]
[![Test coverage][codecov-image]][codecov-url]
[![License][license-image]][license-url]

[![Sonar][sonar-image]][sonar-url]

</div>

## Install

```bash
# use pnpm
$ pnpm install -D workspace-projects

# use yarn
$ yarn add -D workspace-projects

# use npm
$ npm install -D workspace-projects
```

## Usage

1. use `workspace-projects` in async mode

```js
import { workspaceProjects } from 'workspace-projects'

workspaceProjects().then(data => {
  console.log('The workspace projects is: ', data) // [ 'packages/utils', 'packages/monorepo-root' ]
})
```

2. use `workspace-projects` in sync mode

```js
import { workspaceProjectsSync } from 'workspace-projects'

console.log('The workspace projects is: ', workspaceProjectsSync()) // [ 'packages/utils', 'packages/monorepo-root' ]
```

## Issues & Support

Please open an issue [here](https://github.com/saqqdy/node-kit/issues).

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/workspace-projects.svg?style=flat-square
[npm-url]: https://npmjs.org/package/workspace-projects
[codacy-image]: https://app.codacy.com/project/badge/Grade/f70d4880e4ad4f40aa970eb9ee9d0696
[codacy-url]: https://www.codacy.com/gh/saqqdy/workspace-projects/dashboard?utm_source=github.com&utm_medium=referral&utm_content=saqqdy/workspace-projects&utm_campaign=Badge_Grade
[codecov-image]: https://img.shields.io/codecov/c/github/saqqdy/workspace-projects.svg?style=flat-square
[codecov-url]: https://codecov.io/github/saqqdy/workspace-projects?branch=master
[license-image]: https://img.shields.io/badge/License-MIT-blue.svg
[license-url]: LICENSE
[sonar-image]: https://sonarcloud.io/api/project_badges/quality_gate?project=saqqdy_node-kit
[sonar-url]: https://sonarcloud.io/dashboard?id=saqqdy_node-kit
