webpack.config

## webpack `mode`选项

- development：将 `process.env.NODE_ENV` 的值设置为 `development`

- production：将 `process.env.NODE_ENV` 的值设置为 `production`，启用 `FlagDependencyUsagePlugin`, `FlagIncludedChunksPlugin`·`, `·`ModuleConcatenationPlugin`·`, `·`NoEmitOnErrorsPlugin`, `OccurrenceOrderPlugin`, `SideEffectsFlagPlugin` 和 `UglifyJsPlugin`
