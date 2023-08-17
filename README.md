## Command

```bash
$ nest new nestjs-prisma
$ npm run start:dev

$ cd db && docker compose up -d
$ npm install -D prisma
$ npx prisma init
$ npx prisma migrate dev --name "init"

$ npm install --save @nestjs/swagger swagger-ui-express

$ nest generate resource articles
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

## file
dto: requestに渡されるBody。ここでバリデーションできる。
entity: response body

entityがprisma/clientのmodelをimplementsする感じか。
DBの方がpropが多い場合どうするんだろ。

## 参考記事
openapi の yaml 出力
https://wp-kyoto.net/export-swagger-api-def-from-nestjs/

発行sql
https://zenn.dev/takepepe/articles/nestjs-prisma-logger
