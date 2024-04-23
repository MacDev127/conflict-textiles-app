import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LoginButton from "@/components/LoginButton/LoginButton";
import { Link } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";

const MenuComponent = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        event.preventDefault(); // Prevent the default action

        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogout = () => {
        // Close the menu first
        handleClose();
        router.post("/logout");
    };
    const { auth } = usePage().props; // Assuming your backend sends `auth` prop with `user` and `role`

    const dashboardLink = () => {
        if (auth.user && auth.user.role) {
            switch (auth.user.role.name) {
                case "admin":
                    return "/metrics-dashboard";
                case "researcher":
                    return "/researcher-dashboard";
                default:
                    return "/"; // Some default fallback
            }
        }
        return "/login"; // If not logged in or role not defined, go to login page
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
            >
                {/* <Link href="/login">
                </Link> */}
                <LoginButton className="nav_log"></LoginButton>
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
                {auth.user && (
                    <Link
                        href={dashboardLink()}
                        style={{ textDecoration: "none" }}
                    >
                        <MenuItem onClick={handleClose}>Dashboard</MenuItem>
                    </Link>
                )}
                {!auth.user && (
                    <Link href="/login" style={{ textDecoration: "none" }}>
                        <MenuItem onClick={handleClose}>Login</MenuItem>
                    </Link>
                )}
                {auth.user && (
                    <MenuItem onClick={handleLogout}>Log out</MenuItem>
                )}
            </Menu>
        </div>
    );
};

export default MenuComponent;
