import { Grid } from "@mui/material";
import InputDate from "../../components/InputDate";
import InputExam from "../../components/InputExam";
import InputTime from "../../components/InputTime";
import InputInformations from "../../components/InputInformations";

export default function Form(){
    return(
        <Grid>
            <Grid sx={{display: 'flex', flexDirection: "row", gap: 5, paddingY: 2, justifyContent: "center",}}>
                <InputDate/>
                <InputTime />
                <InputExam/>
            </Grid>
            <InputInformations/>
        </Grid>
    )
}