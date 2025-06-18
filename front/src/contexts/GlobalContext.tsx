import { createContext, useState, ReactNode } from 'react';
import { Scheduling, SchedulingData } from '../types/scheduling';
import { ToastProps } from '../types/toast';

type GlobalContextType = {
  rows: Scheduling[];
  setRows: React.Dispatch<React.SetStateAction<Scheduling[]>>
  selectedScheduling: Scheduling | null;
  setSelectedScheduling: React.Dispatch<React.SetStateAction<Scheduling | null>>;
  modalSchedulingOpen: boolean;
  setModalSchedulingOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalDeleteSchedulingOpen: boolean;
  setModalDeleteSchedulingOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalExamsOpen: boolean;
  setModalExamsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  schedulingData: SchedulingData;
  setSchedulingData: React.Dispatch<React.SetStateAction<SchedulingData>>;
  toasts: ToastProps[];
  setToasts: React.Dispatch<React.SetStateAction<ToastProps[]>>;
  
};

export const GlobalContext = createContext<GlobalContextType>({} as GlobalContextType);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {

  const [ rows, setRows ] = useState<Scheduling[]>([]);
  const [selectedScheduling, setSelectedScheduling] = useState<Scheduling | null>(null);
  const [modalSchedulingOpen, setModalSchedulingOpen] = useState<boolean>(false);
  const [modalDeleteSchedulingOpen, setModalDeleteSchedulingOpen] = useState<boolean>(false);
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
      errorText: "* Campo Obrigatório",
      label: "Data",
      placeholder: "Seleciona a Data",
      required: true
    },
    time: {
      // value: timeStringToDate("00:00:00").toString(),
      value: "",
      error: false,
      errorText: "* Campo Obrigatório",
      label: "Horário",
      placeholder: "Seleciona a Data",
      required: true
    },
    exam: {
      value: "",
      error: false,
      errorText: "* Campo Obrigatório",
      label: "Exame",
      placeholder: "Seleciona o Exame",
      required: true
    }

  });

  return (
    <GlobalContext.Provider value={
        {
          rows,
          setRows,
          selectedScheduling,
          setSelectedScheduling,
          modalSchedulingOpen,
          setModalSchedulingOpen,
          modalExamsOpen,
          setModalExamsOpen,
          schedulingData,
          setSchedulingData,
          toasts,
          setToasts,
          modalDeleteSchedulingOpen,
          setModalDeleteSchedulingOpen
        }
      }>
      {children}
    </GlobalContext.Provider>
  );
};
