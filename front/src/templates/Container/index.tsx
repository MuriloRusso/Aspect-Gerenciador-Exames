import { Grid, Skeleton } from "@mui/material";
import ModalScheduling from "../../components/ModalScheduling";
import ModalExamsList from "../../components/ModalExamsList";
import ModalDeleteScheduling from "../../components/ModalDeleteScheduling";
import Toast from "../../components/Toast";
import List from "../List";
import useLoading from "../../hooks/useLoading";
import { useEffect } from "react";
import useGetList from "../../hooks/useGetList";

export default function Container(){
    const { loading } = useLoading();

    const { getAll } = useGetList();
    useEffect(() => {
        console.log('useeffect getall');        
        getAll();
    }, []);


    return (
        <Grid
            sx={
                {
                    backgroundColor: "#30503a",
                    height: '100vh',
                    padding: 2,
                    backgroundImage: "url('/assets/bg.jpg')",
                    backgroundSize: 'cover',
                    // display: 'flex',
                    // alignItems: 'flex-end',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right',
                    backgroundBlendMode: 'multiply',
                    alignContent: 'flex-end'
                }
            }
        >
            <List/>
            <ModalScheduling/>
            <ModalDeleteScheduling/>
            <ModalExamsList/>
            <Toast/>
        </Grid>
    )
}