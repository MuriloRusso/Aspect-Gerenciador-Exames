import useCreate from "../../hooks/useCreate";
import ButtonPrimary from "../ButtonPrimary";

export default function ButtonCreateSchuduling(){
    const { create } = useCreate();
    return <ButtonPrimary value="Agendar" onClick={create} />
}