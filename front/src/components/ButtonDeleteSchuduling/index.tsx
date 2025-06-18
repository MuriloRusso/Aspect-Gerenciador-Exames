import useDelete from "../../hooks/useDelete";
import ButtonPrimary from "../ButtonPrimary";

export default function ButtonDeleteSchuduling(){
    const { drop } = useDelete();
    return <ButtonPrimary value="Excluir" onClick={drop} />
}