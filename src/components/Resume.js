import React from 'react';
import {makeStyles} from "@material-ui/core/styles"
import {Typography, Box} from "@material-ui/core";
import Navbar from "./Navbar";

const useStyles = makeStyles (theme=>({
    mainContainer: {
        background: "#96CDD4",
        borderRadius: 16
    },
    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: "0 auto",
        "&:before": {
            content:"''",
            position: "absolute",
            height: "100%",
            border: "1px solid black",
            right: "40px",
            top: 0
          
        },
        "&:after": {
            content: "''",
            display: "table",
            clear: "both"
        },
        [theme.breakpoints.up("md")]:{
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto"
            }
        }
    },
    timeLineItem: {
        padding: "1rem",
        borderBottom: "2px solid black",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",   
        clear: "both",
        "&:after": {
            content: "''",
            position: "absolute"
        },
        "&:before": {
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50% - 5px)",
            borderStyle: "solid",
            borderColor: "tomato tomato transparent transparent",
            borderWidth: "0.625rem",
            transform: "rotate(45deg)"
            
        },
        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: "black"
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "transparant transparant tomato tomato"
            }
        }

    },
    timeLineYear: {
        textAlign: "center",
        maxWidth: "9.375rem",
        margin: "0 3rem 0 auto", 
        fontSize: "1.8rem",
        background: "tomato",
        color: "white",
        lineHeight: 1,
        padding: "0.5rem 0 0.5rem",
        borderRadius: 16,
        "&:before" : {
            display: "none"
        },
        [theme.breakpoints.up("md")]: {
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n)" : {
                float: "none", 
                margin: "0 auto"
            },
            "&:nth-of-type(2n):before": {
                display: "none"
            }
        }
        },
        heading: {
            color: "black",
        
            padding: "3rem 0", 
            textTransform: "uppercase"
        },
        subHeading: {
            color: "black",
            padding: '0',
            textTransform: "uppercase"
        }
     
    
}));

const Resume = () => {
    const classes = useStyles();
    return (
        <>
       <Navbar />
      <Box component="header" className={classes.mainContainer}>
          <Typography variant="h4" align="center" className={classes.heading}>
            Work Experience
          </Typography>
                <Box  component="div" className={classes.timeLine}>
              <Typography 
              variant="h2" 
              className={`${classes.timeLineYear} ${classes.timeLineItem}`}
              >
                Nineties
            </Typography>
            <Box component="div" className={classes.timeLineItem}>
                <Typography variant="h5" 
                aligh="center" 
                className={classes.subHeading}>
                    The Beginnings
                </Typography>
                <Typography variant="body1" 
                aligh="center"
                style={{color: "tomato"}}>
                    Computer Games 
                </Typography>
                <Typography variant="subtitle1" 
                aligh="center"
                style={{color: "black"}}>
                This is the subtitle area...........
                </Typography>
            </Box>
                    <Typography
                        variant="h2"
                        className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                    >
                        2000s
            </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5"
                            aligh="center"
                            className={classes.subHeading}>
                            Dial Up
                </Typography>
                        <Typography variant="body1"
                            aligh="center"
                            style={{ color: "tomato" }}>
                            Xanga. Myspace. AOL
                </Typography>
                        <Typography variant="subtitle1"
                            aligh="center"
                            style={{ color: "black" }}>
                            This is the subtitle area...........
                </Typography>
                    </Box>
                    <Typography
                        variant="h2"
                        className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                    >
                        2017-2019
            </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5"
                            aligh="center"
                            className={classes.subHeading}>
                            The Self Taught Beginnings 
                </Typography>
                        <Typography variant="body1"
                            aligh="center"
                            style={{ color: "tomato" }}>
                            General Assembly 
                </Typography>
                        <Typography variant="subtitle1"
                            aligh="center"
                            style={{ color: "black" }}>
                            Road To Full Stack
                </Typography>
                    </Box>
                    <Typography
                        variant="h2"
                        className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                    >
                        2020s
            </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5"
                            aligh="center"
                            className={classes.subHeading}>
                            Marketing
                </Typography>
                        <Typography variant="body1"
                            aligh="center"
                            style={{ color: "tomato" }}>
                            Building On the Side
                </Typography>
                        <Typography variant="subtitle1"
                            aligh="center"
                            style={{ color: "black" }}>
                            The Future
                </Typography>
                    </Box>
          </Box>
      </Box>
       </>
    );
};

export default Resume
