import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LayoutContextType {
  useLayout: boolean;
  setUseLayout: React.Dispatch<React.SetStateAction<boolean>>;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export const LayoutProvider = ({ children }: { children: ReactNode }) => {
  const [useLayout, setUseLayout] = useState(true);

  return (
    <LayoutContext.Provider value={{ useLayout, setUseLayout }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayoutContext = () => {
  const context = useContext(LayoutContext);
  if (context === undefined) {
    throw new Error('useLayoutContext must be used within a LayoutProvider');
  }
  return context;
};
