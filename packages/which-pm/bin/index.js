#!/usr/bin/env node

const { whichPMsync } = require('../dist/index.cjs')

console.info(whichPMsync(process.cwd()))
