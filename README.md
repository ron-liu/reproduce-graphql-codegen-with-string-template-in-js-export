This repo is to present the `graphql-codegen` issue when there is template string in the ts/js exports. 

To reproduce the issue, just run: 

```bash
yarn
yarn graphql:codegen
```

The schema file is in [types.js](types.js), while the `codegen configuration file` is in [codegen.yml](codegen.yml).

