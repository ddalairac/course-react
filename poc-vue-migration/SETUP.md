
< Back to [README.md](./README.md)
# SETUP React + TypeScript + Vite/CRA

Se puede usar Vite como alternativa a CRA (create React App).
Crea un proyecto base mas liviano.


## Create App (con typescript)

### Vite

```
yarn create vite
- React
- Typescript - SWC (reemplaza a babel, es mucho mas eficiente)
```

### CRA (create React App)

```
npx create-react-app platform-home --template typescript 
```

## Install dependencies


- Router
[DOCS](https://create-react-app.dev/docs/adding-a-router/)
```
yarn add react-router-dom
```

- Store
[DOCS](https://react-redux.js.org/introduction/getting-started)
```
yarn add @reduxjs/toolkit react-redux
```

- Mocks 
[DOCS](https://www.npmjs.com/package/json-server#getting-started)
```
yarn add --dev json-server
```

- SASS
```
yarn add -D sass
```

- Prettier (file formatting) 
[DOCS](https://prettier.io/docs/en/configuration)
```
yarn add  --dev prettier
```

- PropTypes
> It doesn't make sense within typescript. The lint does the same job, and the default values within class notation are made in the constructor or when setting the component ‘state’ obj


- ENV
```
npm install --save-dev @types/node

tsconfig.json 
  "compilerOptions": {  "types": ["node”] }
  // (To access process?.env)
```

- Scripts Join
Para correr package.json scripts en paralelo
```
Yarn add npm-run-all
  package.json
  "dev:mock": "npm-run-all --parallel mock dev-mode-mock",
```