## Creat Own React App Template (CRA)

[![Node version](https://img.shields.io/node/v/@clusterh/cra-template-react-starter.svg?style=flat)](http://nodejs.org/download/)
[![npm](https://img.shields.io/npm/dm/@clusterh/cra-template-react.starter.svg)](https://www.npmjs.com/package/@clusterh/cra-template-react-starter)
![GitHub](https://img.shields.io/github/license/clusterh/react-starter-package)


This React Starter is a preconfigured [Create React App (CRA)](https://github.com/facebook/create-react-app) template for the decentralized applications in blockchain. You can start building your app with Zero configuration.

### Usage

```
yarn create react-app your-project-name --template @clusterh/react-starter
```
### Or

```
npx create-react-app your-project-name --template @clusterh/react-starter
```

Next
```
cd your_project_name
```

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### This CRA template includes
 - React
 - Redux Toolkit
 - React Router
 - Axios
 - @web3-react/core
 - @davatar/react
 - Ethers
 - Styled-components
 - Typescript
 - React-snippers
 - react-toastify
 - Code Splitting
 - Global style system
 - Metamask, WalletConnect connection
 - Ethereum Mainnet, Goerli Testnet web3 config
 - ESLint, Prettier configuration

### Advantages
- Fully configurated web3 stuff to interact with smart contract.
- Wallet Conenction implemented with Metamask, WalletConnect
- Added Global style theme, basic components, layouts based in styled-components, flex layout.
- Configured ESLint, Prettier
- Typescript supported

More feature coming on the way...

### Quick Start

After installing the template

1. Add ethereum, goerli Alchemy key in .env file and restart the app

```
REACT_APP_ALCHEMY_KEY = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
REACT_APP_ALCHEMY_KEY_GOERLI = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
```

2. Update environment value for your production

```
REACT_APP_ENVIRONMENT = "prod"
```

3. Update/Add smart contract address, abi with your deployed address in **src/config/web3Connect/web3.ts/EXAMPLE_CONTRACT_ADDRESSES**, **src/config/abis/exampleContractABI.json** file.

4. Check/Update web3 helpers in **src/utils/web3Helpers.ts**, Add functions to interact with smart contract in **src/utils/web3CallHelpers.ts** file.

5. Update your global theme in **src/styles/globalStyles.ts**, **src/styles/theme.ts** file.

6. Add/Update redux state in **src/state** file.

6. Edit the Lint rules in **.eslintrc.json**, **.prettierrc** file.

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

## Support

This project needs a ⭐️ from you. Don't forget to leave a star ⭐️
