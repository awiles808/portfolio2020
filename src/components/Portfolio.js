import React from 'react';
import {makeStyles} from "@material-ui/core/styles"
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from "@material-ui/core"
import Navbar from './Navbar';
import project1 from "./images/PowderPlannerFull.png";
import project2 from "./images/503Dev.png";
import project3 from "./images/LouiesSchedule.png";
import project4 from "./images/pong.png"


const useStyles = makeStyles({
    mainContainer: {
        background: "#233", 
        height: "100%"
    },
    cardContainer: {
        maxWidth: 400,
        margin: "3rem 5rem auto",
        margin: "5rem auto"
    }

});

const Portfolio = () => {
    const classes = useStyles();
    return (
        
        <Box component="div" className={classes.mainContainer}>
            <Navbar />
            <Grid container justify="center">
            {/* Project 1 */}
            <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Project 1"
                            height="240"
                            width="340"
                            image={project1}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Powder Planner
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lorem30
                                </Typography>  
                                </CardContent>
                            </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Share
                                    </Button>
                                    <Button size="small" color="primary">
                                        Live Demo
                                    </Button>
                                </CardActions>
                    </Card>
                    </Grid>
                    {/* Project 2 */}
                    <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Project 1"
                                    height="240"
                                    width="340"
                                    image={project2}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5">
                                        503 Development Company
                                </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lorem30
                                </Typography>
                                </CardContent>
                        </CardActionArea>
                                <CardActions>
                            <Button size="small" color="primary">
                                        Share
                                    </Button>
                                    <Button size="small" color="primary">
                                        Live Demo
                                    </Button>
                                </CardActions>                            
                        </Card>
                </Grid>
                {/* Project 3 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project 1"
                                height="240"
                                width="340"
                                image={project3}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Plubmber's Log
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lorem30
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Shre
                                    </Button>
                                <Button size="small" color="primary">
                                    Live Demo
                                    </Button>
                            </CardActions>                       
                    </Card>
                </Grid>
                {/* Project 4 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project 1"
                                height="240"
                                width="340"
                                image={project4}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Pong
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lorem30
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Shre
                                    </Button>
                                <Button size="small" color="primary">
                                    Live Demo
                                    </Button>
                            </CardActions>                       
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Portfolio
