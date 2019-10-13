# React-Typescript-Material-Boilerplate

![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg) ![License: MIT](https://img.shields.io/badge/license-MIT-brightgreen.svg) [![likeadev](https://img.shields.io/twitter/follow/likeadev?style=social)](https://twitter.com/likeadev)

A boilerplate+ built using React, Redux, TypeScript and Material-UI. It contains basic pre-baked components and utilities to get your project started quickly. Implements guidelines of [Hierarchical Front-end Structure](https://github.com/petejank/hierarchical-front-end-structure).

The package includes:

- sign-in page (any login/password combination will be accepted)
- dashboard page fetching JSON data from external source (courtesy of [JSONPlaceholder](https://jsonplaceholder.typicode.com))
- placeholder of authentication mechanism. Stores token in `localStorage`
- basic tests utilising Jest and [React Testing Library](https://github.com/testing-library/react-testing-library)

## Requirements

- `Node.js >= 10.0.0`
- `Yarn >= 1.0.0`

## Quick Start

1. `git clone git@github.com:petejank/react-typescript-material-boilerplate.git` - clone the repository
2. `cd react-typescript-material-boilerplate` - enter the cloned directory
3. `yarn install` - install dependencies using Yarn
4. `yarn start` - run the development server
5. Access http://localhost:8080/

## Available Run Scripts

Remember to first install required node dependencies through `yarn install` (preffered) or `npm install`.

To run tasks type `yarn <taskNameHere>` or `npm run <taskNameHere>`. Tasks list:

- `start` - run Webpack development server
- `build` - build the project in development mode
- `build:prod` - build the project in production mode
- `lint` - prettifies and then lints ts* and js* files
- `test` - run tests and terminate. Usable in CI environments
- `test:watch` - run tests in watch mode. Usable for development
- `test:coverage` - run tests and generate test coverage report
- `bundle-analyzer` - runs bundle analyzer of the production build

## Contribution

Feel free to create an issue or a PR if you have an idea on how to improve this repository.

## License

This work is licensed under [MIT license](LICENSE)
