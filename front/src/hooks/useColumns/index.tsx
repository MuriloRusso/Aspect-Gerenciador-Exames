import { Cloud, ContentCopy, ContentCut, ContentPaste } from "@mui/icons-material";
import { Box, Button, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, MenuList, Paper, Typography } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import React from "react";
// import ListMenu from "../../components/ListMenu";

export default function useColumns() {


    const columns: GridColDef[] = [
        { field: 'id_exam', headerName: 'ID do Exame', width: 350 },
        { field: 'specialty', headerName: 'Especialidade', width: 250 },
        { field: 'informations', headerName: 'Informações', width: 150 },
        { field: 'date_time', headerName: 'Data e Hora', width: 150 },
        { field: 'created_at', headerName: 'Criado', width: 150, }
    ];
    return {columns}
}