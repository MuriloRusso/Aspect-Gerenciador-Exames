import { Grid } from "@mui/material";
import InputDateTime from "../../components/InputDateTime";
import InputExam from "../../components/InputExam";

export default function Form(){
    return(
        <Grid sx={{display: 'flex', flexDirection: "row", gap: 5, paddingY: 2, justifyContent: "center"}}>
            <InputDateTime/>
            <InputExam/>
        </Grid>
    )
}