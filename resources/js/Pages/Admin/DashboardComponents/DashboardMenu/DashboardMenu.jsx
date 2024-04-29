import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";

import { router } from "@inertiajs/react";

const DashboardMenu = ({ authUser }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        // Close the menu first
        handleClose();
        // Then send a POST request to the logout endpoint
        router.post("/logout");
    };
    return (
        <div>
            <Button
                sx={{
                    color: "white",
                    position: "absolute",
                    right: 0,
                    top: 8,
                    marginRight: "10px",
                }}
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
            >
                {authUser?.name}

                <AccountCircleIcon
                    sx={{ fontSize: "30px", marginLeft: "10px" }}
                />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
            >
                <MenuItem onClick={handleLogout}>
                    <LogoutIcon />
                    Logout
                </MenuItem>
            </Menu>
        </div>
    );
};

export default DashboardMenu;
