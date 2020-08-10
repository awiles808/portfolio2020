import React, {useState} from 'react';
import {Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import MobileRightMenuSlider from "@material-ui/core/Drawer";
import Footer from "./Footer";

import {
    AppBar,
    Toolbar,
    ListItem,
    ListItemIcon,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box,
} from "@material-ui/core";
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from "@material-ui/icons";
import avatar from "../logo.png";

const useStyles = makeStyles(theme => ({
    menuSliderContainer: {
        width: 250,
        background: '#96CDD4',
        height: "100%"
    },
    avatar: {
        display:"block",
        margin: "0.5rem auto",
        width: theme.spacing(15),
        height: theme.spacing(15)
    },
    listItem: {
        color: '#222'
    }
    
}));

const menuItems = [
    {
        listIcon: <Home />,
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <AssignmentInd />,
        listText: "Resume",
        listPath: "/resume"
    },
    {
        listIcon: <Apps/>,
        listText: "Portfolio",
        listPath: "/portfolio"
       
    },
    {
        listIcon: <ContactMail />,
        listText: "Contacts",
        listPath: "/contacts"
    }
];

const Navbar = () => {
    const [state, setState] = useState({
        right: false 
    });

    const toggleSlider = (slider, open) => () => {
        setState({...state, [slider]: open });
    };


    const classes = useStyles();

    const sideList = slider => (
        <Box 
        className={classes.menuSliderContainer} 
        component="div"
        onClick={toggleSlider(slider, false)}
        
        >
            <Avatar className={classes.avatar} src={avatar} alt="Auburn" />
            <Divider />
            <List>
                {menuItems.map((lsItem, key) => (
                    <ListItem button key={key} component={Link} to={lsItem.listPath}>
                        <ListItemIcon className={classes.listItem}>
                            {lsItem.listIcon}
                        </ListItemIcon>
                        <ListItemText
                            className={classes.listItem}
                            primary={lsItem.listText} />
                    </ListItem>
                ))}
            </List>
        </Box>

    )
    return (
        <>
        
            <Box component="nav">
                <AppBar position="static" style={{ background: "#222" }}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider("right", true)}>
                            <ArrowBack style={{ color: "#96CDD4" }} />
                        </IconButton>
                        <Typography variant="h5" style={{ color: "#FFFFFF" }}>
                            Portfolio
                        </Typography>
                    </Toolbar>
                    <MobileRightMenuSlider
                    anchor="right" 
                    open={state.right}
                    onClose={toggleSlider("right", false)}
                    >
                        
                        {sideList("right")}
                        <Footer/>
                    </MobileRightMenuSlider>
                </AppBar>
            </Box>
        </>

    );
};

export default Navbar
