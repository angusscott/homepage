import {withStyles} from "@material-ui/core";
import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ProjectCard from "../home/ProjectCard";

const styles = (theme) => ({
    root: {
        backgroundColor: theme.palette.secondary.main,
        minHeight: '100vh'
    },
    title: {
        marginBottom: 4,
        color: 'white'
    },


});


const Projects = (props) => {
    let {classes} = props;
    return (
        <div className="Projects">
            <div className={classes.root}>
                <div style={{height: '10vh'}}/>

                <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <Box p={2}>
                        <Typography className={classes.title} variant={'h3'} align={'center'}>
                            FEATURED PROJECTS
                        </Typography>
                    </Box>
                </Box>
                <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <Grid container item xs={1} spacing={5}/>
                    <Grid container item xs={10} spacing={5}>
                        <Grid container item md={4}>
                            <ProjectCard technologies={"#React #MaterialUI"} overline={'Web'} heading={"Personal Website"}
                                         body={'A simple React and Material UI based website for hosting and collating a number of personal projects. If you are reading this, then it\'s likely you are already using it! '}
                                         url={"https://github.com/angusscott/homepage"}
                            />
                        </Grid>
                    </Grid>
                    <Grid container item xs={1} spacing={5}/>

                </Box>
            </div>
        </div>
    );
}

export default withStyles(styles)(Projects);