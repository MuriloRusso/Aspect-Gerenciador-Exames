import { Grid } from "@mui/material";
import ButtonSecondary from "../ButtonSecondary";
import useModals from "../../hooks/useModals";
import ButtonDeleteSchuduling from "../ButtonDeleteSchuduling";


export default function ModalDeleteSchedulingFooter(){
    const { toogleModalScheduling } = useModals();
    return (
        <Grid sx={{display: "flex", gap: 3, justifyContent: "flex-end", paddingTop: 3}}>
            <ButtonSecondary value="Cancelar" onClick={toogleModalScheduling} />
            <ButtonDeleteSchuduling />
        </Grid>
    )
}