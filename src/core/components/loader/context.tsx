import React from 'react';

export interface LoaderContextModel {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoaderContext = React.createContext<LoaderContextModel>({
  active: false,
  setActive: () => {},
});

export const useLoaderContext = (): LoaderContextModel => {
  const ctx = React.useContext(LoaderContext);
  if (!ctx) {
    throw new Error('useLoaderContext must be used within LoaderProvider');
  }
  return ctx;
};

export interface LoaderProviderProps {
  children?: React.ReactNode;
}

export const LoaderProvider: React.FC<LoaderProviderProps> = (props: LoaderProviderProps): React.ReactElement => {
  const { children } = props;
  const [active, setActive] = React.useState(false);
  const value = React.useMemo<LoaderContextModel>(() => ({ active, setActive }), [active, setActive]);
  return <LoaderContext.Provider value={value}>{children}</LoaderContext.Provider>;
};
