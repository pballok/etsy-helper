import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { useState } from 'react';
import { MouseEvent } from "react";

import './MainAppBar.css';

interface MainAppBarProps {
    title: string,
}

function MainAppBar({title} : MainAppBarProps)
{
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    }
    const navItems = [
        {name: "Dashboard", handleClick: () => {}},
        {name: "Listings", handleClick: () => {}},
        {name: "Orders", handleClick: () => {}},
    ];

    return (
        <Box className="app-bar">
            <AppBar position="static">
                <Toolbar>
                    <IconButton color="inherit" onClick={handleButtonClick}>
                        <MenuIcon />
                    </IconButton>
                    <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                        {navItems.map((item) => (
                            <MenuItem onClick={item.handleClick}>
                                {item.name}
                            </MenuItem>
                        ))}
                    </Menu>
                    <Typography className="app-bar__title" component="div" variant="h6">
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default MainAppBar;