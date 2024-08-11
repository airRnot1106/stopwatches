import { type ReactNode, createContext, useRef } from 'react';

type ResetAllContextProps = {
  addResetFunction: (resetFn: () => void) => void;
  resetAll: () => void;
};

export const ResetAllContext = createContext<ResetAllContextProps | undefined>(
  undefined,
);

type ResetProviderProps = {
  children: ReactNode;
};

export const ResetProvider = ({ children }: ResetProviderProps) => {
  const resetFunctions = useRef<(() => void)[]>([]);

  const addResetFunction = (resetFn: () => void) => {
    resetFunctions.current.push(resetFn);
  };

  const resetAll = () => {
    for (const resetFn of resetFunctions.current) {
      resetFn();
    }
  };

  return (
    <ResetAllContext.Provider value={{ addResetFunction, resetAll }}>
      {children}
    </ResetAllContext.Provider>
  );
};
