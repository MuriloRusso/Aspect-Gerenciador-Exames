import { Grid } from "@mui/material";
import ButtonSecondary from "../ButtonSecondary";

export default function ModalSchedulingFooter(){
    return (
        <Grid sx={{display: "flex", gap: 3, justifyContent: "flex-end", paddingY: 3}}>
            <ButtonSecondary value="Cancelar" onClick={()=>{}} />
        </Grid>
    )
}