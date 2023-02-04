#!/usr/bin/env node

import { whichPMSync } from '../dist/index.mjs'

console.info(whichPMSync(process.cwd()))
