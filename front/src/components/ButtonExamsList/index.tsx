import useModals from "../../hooks/useModals";
import ButtonPrimary from "../ButtonPrimary";
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

export default function ButtonExamsList(){
    const { toogleModalExamsList } = useModals();
    return <ButtonPrimary value="Exames" Icon={DescriptionOutlinedIcon} onClick={toogleModalExamsList} />
}