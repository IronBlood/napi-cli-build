#!/usr/bin/env node

import { execSync } from 'node:child_process'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

execSync(
  `node ${resolve(
    fileURLToPath(import.meta.url),
    '../src/cli.ts',
  )} ${process.argv.slice(2).join(' ')}`,
  {
    stdio: 'inherit',
  },
)
