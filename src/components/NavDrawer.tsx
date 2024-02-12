import { useState } from 'react';
import {Drawer, IconButton, List, ListItemButton, ListItemText} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function NavDrawer() {
    const [open, setOpen] = useState(false);

    const navItems = [
        {name: "Listings"},
        {name: "Orders"},
    ];

    return (
        <>
            <IconButton onClick={() => {setOpen(true);}}>
                {open ? null : <ArrowForwardIosIcon />}
            </IconButton>
            <Drawer variant="temporary" anchor="left" open={open} onClose={() => {setOpen(false);}}>
                {navItems.map((item, index) => (
                    <List>
                        <ListItemButton key={`"nav-"${index}`}>
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </List>
                ))}
            </Drawer>
        </>
    )
}

export default NavDrawer;