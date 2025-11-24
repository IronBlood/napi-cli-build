import { Cli } from 'clipanion'

import { CLI_VERSION } from './utils/misc.js'

export const cli = new Cli({
  binaryName: 'napi-build',
  binaryVersion: CLI_VERSION,
})
