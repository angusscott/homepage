import React from 'react';
import {withStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import HeadshotCard from "./HeadshotCard";


const styles = (theme) => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        minHeight: '100vh'

    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    secondary: {
        backgroundColor: theme.palette.secondary.main,
        height: '100vh'
    },
});


const Homepage = (props) => {
    let {classes} = props;
    return (
        <div className="Homepage">
            <div className={classes.root}>
                <div style={{height: '10vh'}}/>
                <Grid container>
                    <Grid container item lg={5} md={4} sm={3} xs={2}>

                    </Grid>
                    <Grid container item lg={2} md={4} sm={6} xs={8}>
                        <HeadshotCard/>

                    </Grid>
                    <Grid container item lg={5} md={4} sm={3} xs={2}>
                    </Grid>
                </Grid>
            </div>

        </div>
    );
}

export default withStyles(styles)(Homepage);
