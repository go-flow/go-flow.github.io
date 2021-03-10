import React, { Suspense, useEffect, useState } from 'react';
import Progress from 'react-progress';
import { LoaderProvider, useLoaderContext } from './context';

export const Indicator: React.FC = (): React.ReactElement | null => {
  const { active } = useLoaderContext();
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setPercent((p) => (p < 100 ? p + 10 : 100));
    }, 100);
    return () => {
      clearTimeout(timeoutId);
    };
  });

  return active ? <Progress percent={percent} /> : null;
};

export const IndicatorFallback: React.FC = (): React.ReactElement | null => {
  const { setActive } = useLoaderContext();

  useEffect(() => {
    setActive(true);
    return () => {
      setActive(false);
    };
  });

  return null;
};

export interface LoaderProps {
  children?: React.ReactNode;
}

export const Loader: React.FC<LoaderProps> = ({ children }: LoaderProps): React.ReactElement => {
  return (
    <LoaderProvider>
      <Indicator />
      <Suspense fallback={<IndicatorFallback />}>{children}</Suspense>
    </LoaderProvider>
  );
};
