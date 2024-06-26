import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LoginButton from "../LoginButton/LoginButton";
import { Link } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";
import ListItemIcon from "@mui/material/ListItemIcon";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import "./MenuComponent.css";

const MenuComponent = ({ authUser }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        event.preventDefault();

        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogout = () => {
        handleClose();
        router.post("/logout");
    };
    const { auth } = usePage().props;

    const dashboardLink = () => {
        if (auth.user && auth.user.role) {
            switch (auth.user.role.name) {
                case "admin":
                    return "/metrics-dashboard";
                case "researcher":
                    return "/";
                default:
                    return "/";
            }
        }
        return "/login";
    };

    return (
        <div>
            <a
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
            >
                <LoginButton authUser={authUser} className="nav_log">
                    {authUser?.name}
                </LoginButton>
            </a>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
            >
                {!auth.user && (
                    <Link href="/login" style={{ color: "black" }}>
                        <MenuItem
                            onClick={handleClose}
                            sx={{ paddingRight: "30px" }}
                        >
                            <ListItemIcon>
                                <LoginIcon />
                            </ListItemIcon>
                            Login
                        </MenuItem>
                    </Link>
                )}
                {auth.user && auth.user.role_id === 2 && (
                    <Link href="/metrics-dashboard" style={{ color: "black" }}>
                        <MenuItem
                            onClick={handleClose}
                            sx={{ marginRight: "30px" }}
                        >
                            <DashboardCustomizeIcon
                                sx={{
                                    color: "#00000080",
                                }}
                            >
                                <LoginIcon />
                            </DashboardCustomizeIcon>
                            Dashboard
                        </MenuItem>
                    </Link>
                )}

                {auth.user && (
                    <MenuItem onClick={handleLogout} sx={{ gap: "" }}>
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        Log out
                    </MenuItem>
                )}
            </Menu>
        </div>
    );
};

export default MenuComponent;
