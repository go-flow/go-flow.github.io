import React from 'react';
import { AppModule } from '../../core';
import { PublicLayout } from '../../core/layouts';

const dashboardModule: AppModule = {
  routes: [
    {
      path: '/',
      exact: true,
      layout: PublicLayout,
      page: React.lazy(() => import('./pages/home')),
    },
  ],
};

export default dashboardModule;
