import React from 'react';
import { AppModule } from '../../core';
import { PublicLayout } from '../../core/layouts';

const errorModule: AppModule = {
  routes: [
    {
      path: '/forbidden',
      exact: true,
      layout: PublicLayout,
      page: React.lazy(() => import('./pages/forbidden')),
    },
    {
      layout: PublicLayout,
      page: React.lazy(() => import('./pages/not-found')),
    },
  ],
};

export default errorModule;
