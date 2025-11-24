# `@ironblood/napi-cli-build`

[![Download](https://img.shields.io/npm/dm/@ironblood/napi-cli-build)](https://www.npmjs.com/package/@ironblood/napi-cli-build)
[![Install size](https://packagephobia.com/badge?p=@ironblood/napi-cli-build)](https://packagephobia.com/result?p=@ironblood/napi-cli-build)

> Cli tools for napi-rs *ONLY* for build

**WARN**: This is a tailed version. Use `@napi-rs/cli` unless it's not supported on your platform.

```sh
# or npm, pnpm
yarn add @ironblood/napi-cli-build -D
yarn napi-build build
```

## Commands

| Command         | desc                                                           | docs                                                |
| --------------- | -------------------------------------------------------------- | --------------------------------------------------- |
| build           | build napi-rs project                                          | [./docs/build.md](./docs/build.md)                  |
| pre-publish     | Update package.json and copy addons into per platform packages | [./docs/pre-publish.md](./docs/pre-publish.md)      |

### Debug mode

```bash
DEBUG="napi:*" napi-build [command]
```
