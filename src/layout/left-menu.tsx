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
import AnchorIcon from '@mui/icons-material/Anchor';


interface LeftMenuProps {
    drawerOpen: boolean;
    toggleDrawer: () => void;
    drawerWidth: number;
}

export default function LeftMenu({ drawerOpen, toggleDrawer, drawerWidth }: LeftMenuProps) {

    const futureIdeas = ['Movie/TV Show Database', 'Portfolio Website', 'Job Board', 'Random Quote Generator', 'What did you do?']

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

            <ListItemButton href="/quiz">
                <ListItemIcon>
                    <AnchorIcon/>
                </ListItemIcon>
                {drawerOpen && <ListItemText primary="Quiz"/>}
            </ListItemButton>

            {futureIdeas.map((item, index) => (
                <ListItemButton key={index}>
                    <ListItemIcon>
                        <AnchorIcon/>
                    </ListItemIcon>
                    {drawerOpen && <ListItemText primary={item}/>}
                </ListItemButton>
            ))}

            <ListItemButton href={'/about'}>
                <ListItemIcon>
                    <InfoIcon/>
                </ListItemIcon>
                {drawerOpen && <ListItemText primary="About"/>}
            </ListItemButton>
        </List>

        <Divider/>
    </Drawer>
}
