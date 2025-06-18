import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Button } from '@mui/material';

type TrashIconProps = {
    onClick?: () => void;
    title?: string;
}

export default function TrashIcon({onClick, title}:TrashIconProps){
    return (
        <Button onClick={onClick ? onClick : ()=>{}} title={title ? title : ''}>
            <DeleteOutlineOutlinedIcon color='error'/>
        </Button>
    )
}