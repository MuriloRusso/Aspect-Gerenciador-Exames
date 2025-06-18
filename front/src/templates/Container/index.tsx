import { Grid, Skeleton } from "@mui/material";
import ModalScheduling from "../../components/ModalScheduling";
import ModalExamsList from "../../components/ModalExamsList";
import ModalDeleteScheduling from "../../components/ModalDeleteScheduling";
import Toast from "../../components/Toast";
import List from "../List";
import useLoading from "../../hooks/useLoading";
import { useEffect } from "react";

export default function Container(){
    const { loading } = useLoading();
    return (
        <Grid sx={{backgroundColor: "#30503a", height: '100vh', padding: 2}}>
            <List/>
            {/* {loading === true ? <Skeleton variant="rectangular" width={'100%'} height={'60vh'}  /> : <List/>} */}
            {/* {loading === false ? <List/> : <List/>} */}

            <ModalScheduling/>
            <ModalDeleteScheduling/>
            <ModalExamsList/>
            <Toast/>
        </Grid>
    )
}