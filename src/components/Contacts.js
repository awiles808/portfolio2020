import React from 'react';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Navbar from "./Navbar";

const InputField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "tomato",
        },
        "& label": {
            color: "#96CDD4"
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "#96CDD4",
            },
        "&:hover fieldSet": {
            borderColor: "#96CDD4"
        }
        },
    },
})(TextField);

const Contacts = () => {
    return (
     <Box component="div">
         <Grid container justify= "center">
             <Box component="form">
                 <Typography variant="h5">
                     Contact Me
                 </Typography>
                 <InputField
                     fullWidth={true}
                     label="Name"
                     variant="outlined" />
                 
             </Box>
         </Grid>

     </Box>
    );
};

export default Contacts
