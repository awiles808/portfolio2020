import React from 'react'
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typograpgy,
    Box
} from "@material-ui/core";
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
}from "@material-ui/icons";

const Navbar = () => {
    return (
        <Box component="nav">
        <AppBar postition="static" style={{ background: "#222"}}>
            <Toolbar>
                    <ArrowBack style={{ color: "#96CDD4"} }/>
            </Toolbar>

        </AppBar>

            
        </Box>
    )
}

export default Navbar
