/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Loader } from '../components/loader';
import { RoutePageProps } from '../routing';

const Public: React.FC<RoutePageProps> = (props: RoutePageProps): React.ReactElement => {
  const { route } = props;
  if (route === null || route === undefined) {
    return <></>;
  }
  return (
    <div className="app">
      <Loader>
        <route.page {...props} />
      </Loader>
    </div>
  );
};

export default Public;
