import { Cloud, ContentCopy, ContentCut, ContentPaste } from "@mui/icons-material";
import { Box, Button, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, MenuList, Paper, Typography } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import React from "react";
// import ListMenu from "../../components/ListMenu";

export default function useColumns() {


    const columns: GridColDef[] = [
        { field: 'logo', headerName: 'Logo', width: 150, renderCell(params) {                
                return(
                    <img 
                        src={
                            params.value ? params.value : 
                            `https://placehold.co/100x100?text=${params.row.name}`
                        }
                        style={{maxHeight: '90%', borderRadius: 100, margin: "2.5% 0"}}
                    />
                )
            },
        },
        { field: 'name', headerName: 'Empresa/Cliente', width: 350 },
        { field: 'ower', headerName: 'Nome Dono', width: 250 },
        { field: 'phone', headerName: 'Telefone', width: 150 },
        { field: 'created_at', headerName: 'Criado', width: 150, },

        {field: 'id', headerName: '', renderCell(params){
            // return <ListMenu/>
            return <></>
        }}

    ];
    return {columns}
}