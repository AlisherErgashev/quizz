import { Box, IconButton, Menu, MenuItem, Toolbar, Typography, useColorScheme } from '@mui/material';
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React, { useState } from 'react';

export default function Navbar() {
    const { mode, setMode } = useColorScheme();
    const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
    const toggleTheme = () => {
        setMode(mode === 'light' ? 'dark' : 'light'); // Toggle between 'light' and 'dark'
    };

    /** Dropdown Menu Handlers */
    const openMenu = (event: React.MouseEvent<HTMLElement>) => {
        setMenuAnchor(event.currentTarget);
    };

    const closeMenu = () => {
        setMenuAnchor(null);
    };

    return <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Application Title */}
        <Typography variant="h6" noWrap>
            My Application
        </Typography>

        <Box>
            {/* Theme Toggle Button */}
            <IconButton color="inherit" onClick={toggleTheme} aria-label="Toggle Theme">
                {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>


            {/* Right Dropdown Menu */}
            <IconButton
                color="inherit"
                onClick={openMenu}
                aria-controls="dropdown-menu"
                aria-haspopup="true"
            >
                <AccountCircleIcon />
            </IconButton>
            <Menu
                id="dropdown-menu"
                anchorEl={menuAnchor}
                open={Boolean(menuAnchor)}
                onClose={closeMenu}
            >
                <MenuItem onClick={closeMenu}>Profile</MenuItem>
                <MenuItem onClick={closeMenu}>Logout</MenuItem>
            </Menu>

        </Box>
    </Toolbar>
}
