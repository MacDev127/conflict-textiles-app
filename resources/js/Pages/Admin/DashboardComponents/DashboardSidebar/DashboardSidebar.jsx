import React, { useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import MenuIcon from "@mui/icons-material/Menu";
import EventIcon from "@mui/icons-material/Event";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardMenu from "../DashboardMenu/DashboardMenu";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "@inertiajs/react";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const DashboardSidebar = ({ menuItems }) => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const drawerWidth = 240;

    const Main = styled("main", {
        shouldForwardProp: (prop) => prop !== "open",
    })(({ theme, open }) => ({
        flexGrow: 1,
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }));

    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== "open",
    })(({ theme, open }) => ({
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: `${drawerWidth}px`,
            transition: theme.transitions.create(["margin", "width"], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    }));

    const DrawerHeader = styled("div")(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: "flex-end",
    }));

    return (
        <>
            <Box sx={{ display: "flex", position: "relative" }}>
                <CssBaseline />

                <Toolbar
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        background: "crimson",
                        position: "fixed",
                        width: "100%",
                        zIndex: 11,
                    }}
                >
                    <IconButton
                        sx={{
                            mr: 2,
                            ...(open && { display: "none" }),
                        }}
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                    >
                        <MenuIcon
                            sx={{
                                fontSize: 30,
                                color: "white",
                            }}
                        />
                    </IconButton>
                    <DashboardMenu />
                </Toolbar>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        "& .MuiDrawer-paper": {
                            width: drawerWidth,
                            boxSizing: "border-box",
                        },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                >
                    <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === "ltr" ? (
                                <ChevronLeftIcon />
                            ) : (
                                <ChevronRightIcon />
                            )}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List>
                        {menuItems.dashboard && (
                            <ListItem disablePadding>
                                <Link
                                    href="/dashboard"
                                    style={{ width: "100%" }}
                                >
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <DashboardCustomizeIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            sx={{
                                                color: "black",
                                            }}
                                            primary="Dashboard"
                                        />
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                        )}
                        {menuItems.events && (
                            <ListItem disablePadding>
                                <Link
                                    href="/events-dashboard"
                                    style={{ width: "100%" }}
                                >
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <EventIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            sx={{
                                                color: "black",
                                            }}
                                            primary="Add Event"
                                        />
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                        )}
                        {menuItems.textiles && (
                            <ListItem disablePadding>
                                <Link
                                    href="/textiles-dashboard"
                                    style={{ width: "100%" }}
                                >
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <AddPhotoAlternateIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            sx={{
                                                color: "black",
                                            }}
                                            primary="Add Textile"
                                        />
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                        )}
                        {menuItems.home && (
                            <ListItem disablePadding>
                                <Link href="/" style={{ width: "100%" }}>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <HomeIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            sx={{
                                                color: "black",
                                            }}
                                            primary="Home"
                                        />
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                        )}
                        {menuItems.bookmarks && (
                            <ListItem disablePadding>
                                <Link
                                    href="/researcher-dashboard"
                                    style={{ width: "100%" }}
                                >
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <BookmarkIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            sx={{
                                                color: "black",
                                            }}
                                            primary="Bookmarks"
                                        />
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                        )}
                    </List>
                    <Divider />
                </Drawer>
                <Main open={open}>
                    <DrawerHeader />
                </Main>
            </Box>
        </>
    );
};

export default DashboardSidebar;
