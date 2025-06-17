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

  function timeStringToDate(time: string): Date {
    const [h, m, s] = time.split(':').map(Number);
    const date = new Date();
    date.setHours(h, m, s, 0);
    return date;
  }


  const [ schedulingData, setSchedulingData ] = useState<SchedulingData>({
    data: {
      value: "2025-01-01",
      error: false,
      errorText: "Campo Obrigatório",
      label: "Data",
      placeholder: "Seleciona a Data",
      required: true
    },
    time: {
      value: timeStringToDate("00:00:00").toString(),
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
          setSchedulingData,
        }
      }>
      {children}
    </GlobalContext.Provider>
  );
};
