import { createContext, useState, ReactNode } from 'react';
import { SchedulingData } from '../types/scheduling';

type GlobalContextType = {
  modalSchedulingOpen: boolean;
  setmodalSchedulingOpen: React.Dispatch<React.SetStateAction<boolean>>
  modalExamsOpen: boolean;
  setModalExamsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  schedulingData: SchedulingData;
  setSchedulingData: React.Dispatch<React.SetStateAction<SchedulingData>>
};

export const GlobalContext = createContext<GlobalContextType>({} as GlobalContextType);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [modalSchedulingOpen, setmodalSchedulingOpen] = useState<boolean>(false);
  const [modalExamsOpen, setModalExamsOpen] = useState<boolean>(false);
  const [ schedulingData, setSchedulingData ] = useState<SchedulingData>({
    data: {
      value: "2025-01-01",
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
