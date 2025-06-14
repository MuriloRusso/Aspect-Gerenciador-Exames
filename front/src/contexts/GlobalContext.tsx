import { createContext, useState, ReactNode } from 'react';

type GlobalContextType = {
  modalschedulingOpen: boolean;
  setModalschedulingOpen: (value: boolean) => void;
  modalExamsOpen: boolean;
  setModalExamsOpen: (value: boolean) => void;
};

export const GlobalContext = createContext<GlobalContextType>({} as GlobalContextType);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [modalschedulingOpen, setModalschedulingOpen] = useState<boolean>(false);
  const [modalExamsOpen, setModalExamsOpen] = useState<boolean>(false);


  return (
    <GlobalContext.Provider value={{ modalschedulingOpen, setModalschedulingOpen, modalExamsOpen, setModalExamsOpen }}>
      {children}
    </GlobalContext.Provider>
  );
};
