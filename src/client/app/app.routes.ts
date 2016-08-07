import {provideRouter, RouterConfig} from '@angular/router';

import {HomeRoutes} from './components/home/index';
import {NameRoutes} from './components/name/index';

const routes: RouterConfig = [
  ...HomeRoutes,
  ...NameRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];
