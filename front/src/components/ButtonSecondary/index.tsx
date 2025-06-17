import { Button, SxProps, Theme } from "@mui/material";

type ButtonProps = {
    value?: string;
    onClick?: () => void;
    sx?: SxProps<Theme>;
    Icon? : React.ElementType;
}

export default function ButtonSecondary({value, onClick, sx, Icon}:ButtonProps){
    return (
        <Button
            variant="text"
            onClick={onClick ? onClick : () => {}}
            sx={{
                backgroundColor: "#fff",
                color: "#30503a",
                height: '40px',
                borderWidth: 1,
                borderColor: "#30503a",
                borderStyle: "solid",
                gap: 1,
                alignItems: 'center',
                ...sx
            }}
        >
            {Icon && <Icon/>}
            {value && value}                
        </Button>
    )
}