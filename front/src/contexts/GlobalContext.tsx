import { createContext, useState, ReactNode } from 'react';
import { SchedulingData } from '../types/scheduling';
import { ToastProps } from '../types/toast';

type GlobalContextType = {
  modalSchedulingOpen: boolean;
  setmodalSchedulingOpen: React.Dispatch<React.SetStateAction<boolean>>
  modalExamsOpen: boolean;
  setModalExamsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  schedulingData: SchedulingData;
  setSchedulingData: React.Dispatch<React.SetStateAction<SchedulingData>>
  toasts: ToastProps[];
  setToasts: React.Dispatch<React.SetStateAction<ToastProps[]>>
};

export const GlobalContext = createContext<GlobalContextType>({} as GlobalContextType);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [modalSchedulingOpen, setmodalSchedulingOpen] = useState<boolean>(false);
  const [modalExamsOpen, setModalExamsOpen] = useState<boolean>(false);

  const [toasts, setToasts] = useState<ToastProps[]>([]);

  function timeStringToDate(time: string): Date {
    const [h, m, s] = time.split(':').map(Number);
    const date = new Date();
    date.setHours(h, m, s, 0);
    return date;
  }

  const [ schedulingData, setSchedulingData ] = useState<SchedulingData>({
    data: {
      value: "",
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
      label: "Horário",
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
          toasts,
          setToasts
        }
      }>
      {children}
    </GlobalContext.Provider>
  );
};
