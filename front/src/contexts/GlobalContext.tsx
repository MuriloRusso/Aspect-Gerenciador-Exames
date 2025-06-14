import { createContext, useState, ReactNode } from 'react';

type GlobalContextType = {
  modalShedulingOpen: boolean;
  setModalShedulingOpen: (value: boolean) => void;
};

export const GlobalContext = createContext<GlobalContextType>({} as GlobalContextType);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [modalShedulingOpen, setModalShedulingOpen] = useState<boolean>(false);

  return (
    <GlobalContext.Provider value={{ modalShedulingOpen, setModalShedulingOpen }}>
      {children}
    </GlobalContext.Provider>
  );
};
