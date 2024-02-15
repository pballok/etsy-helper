import { useState } from 'react';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import './NavDrawer.css';

function NavDrawer() {
    const [open, setOpen] = useState(false);

    const navItems = [
        {name: "Listings"},
        {name: "Orders"},
    ];

    const list = (
      <Box role="presentation" onClick={() => {setOpen(false);}}>
         <List>
             {navItems.map((item, index) => (
                 <ListItemButton key={`"nav-"${index}`}>
                     <ListItemText primary={item.name} />
                 </ListItemButton>
             ))}
         </List>
      </Box>
    );

    return (
        <>
            <IconButton className="openIcon" onClick={() => {setOpen(true);}}>
                {open ? null : <ArrowForwardIosIcon />}
            </IconButton>
            <Drawer variant="temporary" anchor="left" open={open} onClose={() => {setOpen(false);}}>
                {list}
            </Drawer>
        </>
    )
}

export default NavDrawer;