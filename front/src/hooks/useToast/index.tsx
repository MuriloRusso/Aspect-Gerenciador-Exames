import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { ToastProps } from "../../types/toast";

export default function useToast(){
    const { toasts, setToasts } = useContext(GlobalContext);

    const addToast = (value: ToastProps) => {
        const id = Date.now();
        const newToast = { ...value, id };
        setToasts(prev => [...prev, newToast]);
        setTimeout(() => {
            removeToast(id);
        }, 5000);
    };

    const removeToast = (id: number) => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
    };

    return { toasts, addToast }
}