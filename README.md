# @horecalijst/web

![release](https://github.com/horecalijst/web/workflows/release/badge.svg)
![linting](https://github.com/horecalijst/web/workflows/linting/badge.svg)

## Running

```bash
yarn dev
```

## Setup

```bash
cp .env.example .env
```

### VSCode

#### Plugins

- https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
- https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint
- https://marketplace.visualstudio.com/items?itemName=cpylua.language-postcss

#### Workspace settings

```javascript
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true,
  },
  "files.associations": {
    "*.css": "postcss",
  },
}
```
