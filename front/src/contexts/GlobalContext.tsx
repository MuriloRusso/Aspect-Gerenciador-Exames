import { createContext, useState, ReactNode } from 'react';
import { SchedulingData } from '../types/scheduling';

type GlobalContextType = {
  modalSchedulingOpen: boolean;
  setmodalSchedulingOpen: (value: boolean) => void;
  modalExamsOpen: boolean;
  setModalExamsOpen: (value: boolean) => void;
  schedulingData: SchedulingData;
  setSchedulingData: (value:SchedulingData) => void;
};

export const GlobalContext = createContext<GlobalContextType>({} as GlobalContextType);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [modalSchedulingOpen, setmodalSchedulingOpen] = useState<boolean>(false);
  const [modalExamsOpen, setModalExamsOpen] = useState<boolean>(false);
  const [ schedulingData, setSchedulingData ] = useState<SchedulingData>({
    data: {
      value: "",
      error: false,
      errorText: "Campo Obrigatório",
      label: "Data",
      placeholder: "Seleciona a Data",
      required: true
    }
  });

  return (
    <GlobalContext.Provider value={
        {
          modalSchedulingOpen,
          setmodalSchedulingOpen,
          modalExamsOpen,
          setModalExamsOpen,
          schedulingData,
          setSchedulingData
        }
      }>
      {children}
    </GlobalContext.Provider>
  );
};
