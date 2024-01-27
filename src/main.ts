import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import { ExpressAdapter } from '@nestjs/platform-express';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { Express } from 'express-serve-static-core';

const server = express();
async function bootstrap(expressInstance: Express) {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
    { cors: true },
  );
  app.enableCors();
  return app.init();
}

async function start() {
  try {
    await bootstrap(server);
    return server;
  } catch (e) {
    Logger.error(e);
    process.exit(1);
  }
}
(async () => {
  await start();
  let PORT = process.env.PORT || 3001
  server.listen(PORT);
  Logger.debug(`Server is now running on port ${PORT}`)
})();