import { Cli } from 'clipanion'

import { BuildCommand } from './commands/build.js'
import { CLI_VERSION } from './utils/misc.js'

export const cli = new Cli({
  binaryName: 'napi-build',
  binaryVersion: CLI_VERSION,
})

cli.register(BuildCommand)
