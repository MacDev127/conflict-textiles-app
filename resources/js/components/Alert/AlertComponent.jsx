import React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const AlertComponent = ({
    children,
    closeHandler,
    severity,
    className,
    variant,
}) => {
    return (
        <Stack
            sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
            spacing={2}
        >
            <Alert
                className={className}
                sx={{
                    display: "flex",
                }}
                // autoHideDuration={6000}
                variant={variant}
                severity={severity}
                onClose={closeHandler}
            >
                {children}
            </Alert>
        </Stack>
    );
};

export default AlertComponent;
