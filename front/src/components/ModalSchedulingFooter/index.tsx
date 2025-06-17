import { Grid } from "@mui/material";
import ButtonSecondary from "../ButtonSecondary";
import ButtonCreateSchuduling from "../ButtonCreateSchuduling";
import useModals from "../../hooks/useModals";


export default function ModalSchedulingFooter(){
    const { toogleModalScheduling } = useModals();
    return (
        <Grid sx={{display: "flex", gap: 3, justifyContent: "flex-end", paddingTop: 3}}>
            <ButtonSecondary value="Cancelar" onClick={toogleModalScheduling} />
            <ButtonCreateSchuduling />
        </Grid>
    )
}