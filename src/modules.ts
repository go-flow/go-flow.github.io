import { AppModule, AppRoute } from './core';

import docsModule from './modules/docs';
import websiteModule from './modules/website';
import errorModule from './modules/error';

const modules: Array<AppModule> = [docsModule, websiteModule, errorModule];

let appRoutes: Array<AppRoute> = [];

modules.forEach((module) => {
  if (module.routes) {
    appRoutes = appRoutes.concat(module.routes);
  }
});

export const routes = appRoutes;

export default modules;
