## Command

```bash
$ nest new nestjs-prisma
$ npm run start:dev

$ cd db && docker compose up -d
$ npm install -D prisma
$ npx prisma init
$ npx prisma migrate dev --name "init"

$ npm install --save @nestjs/swagger swagger-ui-express

```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
