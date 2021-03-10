import React from 'react';
import { AppModule } from '../../core';
import { PublicLayout } from '../../core/layouts';

const docsModule: AppModule = {
  routes: [
    {
      path: '/docs',
      exact: true,
      layout: PublicLayout,
      page: React.lazy(() => import('./pages/home')),
    },
  ],
};

export default docsModule;
