<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>


# NestJS Monorepo Project Boilerplate

This is a NestJS monorepo project boilerplate that provides a solid foundation for building scalable and maintainable applications. The [monorepo](https://docs.nestjs.com/cli/monorepo) structure allows for easy code sharing and reusability across multiple projects. The structure focuses on the use case of a Bookstore where we want to keep NestJS two separate APIs: one for a bookstore and another for employees of the bookstore. The purpose of this boilerplate is to keep the two APIs separate, while also providing a NestJS library to share common modules such as authentication and user management.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository to your local machine
2. Install the necessary dependencies by running `pnpm install` in the root directory of the project (notice that the seput is using `pnpm` instead of `npm` or `yarn`

## Project Structure

This project is structured as a monorepo, with the following directories:

- apps/bookstore-api: This directory contains the code for the API that serves the bookstore.
- apps/employee-api: This directory contains the code for the API that serves the employees of the bookstore.
- libs/authentication: This directory contains the code for the NestJS library that should provide common modules for authentication
- libs/users: This directory contains the code for the NestJS library that should provide common modules for users

Refer to the following visual organisation for clarity. Also, consider that this architectural approach is based on the official NestJS [documentation](https://docs.nestjs.com/cli/monorepo).

```
nestjs-monorepo/
├─ node_modules/
├─ apps/
│  ├─ bookstore-api/
│  │  ├─ src
│  │  ├─ test
│  ├─ employees-api/
│  │  ├─ src
│  │  ├─ test
├─ libs/
│  ├─ auth/
│  ├─ users/
├─ .gitignore
├─ package.json
├─ nest-cli.json
├─ README.md
```

## Running the APIs

To run the APIs, follow these steps:

1. Navigate to the apps/bookstore-api directory
2. Start the server by running npm run start:dev
3. Navigate to the apps/employee-api directory
4. Start the server by running npm run start:dev

## Using the Common Library

To use the common library in either of the APIs, follow these steps:

1. Import the necessary modules from the @app/* package
2. Use the imported modules in your code
For example, to use the authentication module in the apps/bookstore-api API, you would do the following:

typescript
import { AuthModule } from '@bookstore/common';

@Module({
  imports: [AuthModule],
  controllers: [BookstoreController],
  providers: [BookstoreService],
})
export class BookstoreModule {}

## Contributing

If you would like to contribute to this project, please follow these steps:
1. Fork the repository
2. Create a new branch for your changes
3. Make your changes and commit them to your branch
4. Push your changes to your forked repository
5. Create a pull request to merge your changes into the main repository


## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

