import { Alert, AlertTitle, Grid } from "@mui/material";
import useToast from "../../hooks/useToast";

export default function Toast() {
  const { toasts } = useToast();
  return (
    <Grid sx={{display: 'flex', flexDirection: 'column', gap: 1, position: "fixed", right: 20, bottom: 10, zIndex: 999999 }}>
      {toasts.map((item, i) => {
        const iconProp = item.Icon === false ? false : item.Icon ? <item.Icon /> : undefined;

        return (
          <Alert
            key={i}
            severity={item.severity}
            variant={item.variant}
            icon={iconProp}
          >
            {item.alertTitle && <AlertTitle>{item.alertTitle}</AlertTitle>}
            {item.text}
          </Alert>
        );
      })}
    </Grid>
  );
}
