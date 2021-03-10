import React from 'react';
import { RouteProps } from 'react-router-dom';

export interface PageMeta {
  title: string;
  description: string;
  keywords: string;
}

export interface AppRoute {
  name?: string;
  path?: string;
  exact?: boolean;
  sensitive?: boolean;
  strict?: boolean;
  sideBar?: boolean;
  sideBarIcon?: string;
  topBar?: boolean;
  tobBarIcon?: string;
  permissions?: Array<string>;
  layout?: React.ComponentType<RoutePageProps>;
  page: React.ComponentType<RoutePageProps>;
  pageMeta?: PageMeta;
  routes?: Array<AppRoute>;
  hidden?: boolean;
}

export interface RoutePageProps extends RouteProps {
  route?: AppRoute;
}
