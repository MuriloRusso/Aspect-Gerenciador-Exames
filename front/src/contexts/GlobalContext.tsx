import { createContext, useState, ReactNode } from 'react';

type GlobalContextType = {
  modalSchedulingOpen: boolean;
  setmodalSchedulingOpen: (value: boolean) => void;
  modalExamsOpen: boolean;
  setModalExamsOpen: (value: boolean) => void;
};

export const GlobalContext = createContext<GlobalContextType>({} as GlobalContextType);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [modalSchedulingOpen, setmodalSchedulingOpen] = useState<boolean>(false);
  const [modalExamsOpen, setModalExamsOpen] = useState<boolean>(false);


  return (
    <GlobalContext.Provider value={{ modalSchedulingOpen, setmodalSchedulingOpen, modalExamsOpen, setModalExamsOpen }}>
      {children}
    </GlobalContext.Provider>
  );
};
