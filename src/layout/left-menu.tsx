import {
    Divider,
    Drawer,
    IconButton,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar
} from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import SettingsIcon from "@mui/icons-material/Settings";


interface LeftMenuProps {
    drawerOpen: boolean;
    toggleDrawer: () => void;
    drawerWidth: number;
}
export default function LeftMenu({ drawerOpen, toggleDrawer, drawerWidth }:LeftMenuProps) {

    return <Drawer
        variant="permanent"
        open={drawerOpen}
        sx={{
            width: drawerOpen ? drawerWidth : `64px`,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
                width: drawerOpen ? drawerWidth : `64px`,
                transition: "width 0.3s",
                overflowX: "hidden",
            },
        }}
    >
        {/* Drawer Toggle */}
        <Toolbar
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center", // Center the IconButton horizontally
                minHeight: "64px", // Ensure consistent height for the Toolbar
            }}
        >
            <IconButton onClick={toggleDrawer}>
                <MenuIcon/>
            </IconButton>
        </Toolbar>

        <Divider/>

        {/* List of Menu Items */}
        <List>
            <ListItemButton href={'/'}>
                <ListItemIcon>
                    <HomeIcon/>
                </ListItemIcon>
                {/* Show full text only in expanded state */}
                {drawerOpen && <ListItemText primary="Home"/>}
            </ListItemButton>

            <ListItemButton href={'/about'}>
                <ListItemIcon>
                    <InfoIcon/>
                </ListItemIcon>
                {drawerOpen && <ListItemText primary="About"/>}
            </ListItemButton>

            <ListItemButton>
                <ListItemIcon>
                    <SettingsIcon/>
                </ListItemIcon>
                {drawerOpen && <ListItemText primary="Settings"/>}
            </ListItemButton>
        </List>

        <Divider/>
    </Drawer>
}
