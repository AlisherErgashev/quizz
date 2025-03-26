import { ReactNode, useState } from "react";
import {
    AppBar,
    Toolbar,
    Box,
} from "@mui/material";
import Navbar from './navbar.tsx';
import LeftMenu from './left-menu.tsx';

const drawerWidth = 240;

interface AppLayoutProps {
    children: ReactNode; // Represents any valid React children element(s)
}


export function AppLayout({ children }: AppLayoutProps) {
    const [drawerOpen, setDrawerOpen] = useState(true);

    /** Drawer toggle state handler */
    const toggleDrawer = () => {
        setDrawerOpen((prev) => !prev);
    };

    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    width: drawerOpen ? `calc(100% - ${drawerWidth}px)` : "calc(100% - 64px)",
                    ml: drawerOpen ? `${drawerWidth}px` : `64px`,
                }}
            >
                {/*Navigation bar*/}
                <Navbar/>


            </AppBar>

            {/*left menu drawer*/}
            <LeftMenu drawerWidth={drawerWidth} drawerOpen={drawerOpen} toggleDrawer={toggleDrawer}/>

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: drawerOpen ? `calc(100% - ${drawerWidth}px)` : "calc(100% - 64px)",
                    ml: drawerOpen ? `${drawerWidth}px` : `64px`,
                    transition: "margin-left 0.3s ease",
                }}
            >
                <Toolbar/>
                {children}
            </Box>
        </>
    );
}
