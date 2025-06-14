import useModals from "../../hooks/useModals";
import ButtonPrimary from "../ButtonPrimary";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

export default function ButtonNewScheduling(){
    const { toogleModalscheduling } = useModals();
    return <ButtonPrimary value="Novo Agendamento" Icon={AddCircleOutlineOutlinedIcon} onClick={toogleModalscheduling} />
}