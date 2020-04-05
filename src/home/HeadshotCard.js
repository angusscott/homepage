import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography";
import {withStyles} from "@material-ui/core";
import Logo from'../logo/headshot.jpg'
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

const styles = (theme) => ({
    root: {
        margin: 'auto',
        borderRadius: 6,
        padding: 6,
    },
    media: {
        borderRadius: 6,
        width: '100%',
        height: 0,
        paddingBottom: '120%',

    },
    overline: {
        fontSize: '0.75rem',
        letterSpacing: 0.5,
        textTransform: 'uppercase',
        color: theme.palette.text.secondary,
        display: 'block',
        textAlign: 'center',
        marginTop: 12,
    },
    heading: {
        textAlign: 'center',
        fontSize: 32,
        lineHeight: 2,
        fontWeight: 300,
        fontFamily:
        // eslint-disable-next-line max-len
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        marginBottom: '0.72em',
        '&:after': {
            content: '""',
            width: 24,
            height: 2,
            backgroundColor: '#ddd',
            display: 'block',
            margin: '8px auto',
            borderRadius: 2,
        },
    },
    body: {
        color: 'rgba(0, 0, 0, 0.7)',
        fontSize: 14,
        lineHeight: 1.75,
        width: '88%',
        margin: '0 auto',
    },
    divider: {
        position: 'relative',
        '&:not(:last-of-type)': {
            '&:after': {
                content: '" "',
                display: 'block',
                position: 'absolute',
                height: '88%',
                width: 1,
                top: '50%',
                right: 0,
                transform: 'translateY(-50%)',
            },
        },
    },
    statLabel: {
        fontSize: 12,
        fontWeight: 500,
        fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        margin: 0,
    },
    statValue: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 4,
        letterSpacing: '1px',
    },
});


const HeadshotCard = (props) => {

    let {classes} = props;

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={Logo}/>
            <CardContent>
                <Typography component={'span'} className={classes.overline}>
                    Software Developer
                </Typography>
                <Typography component={'h4'} className={classes.heading}>
                    Angus Scott
                </Typography>
                <Typography className={classes.body}>
                    <p>I am a Full-Stack Software Developer, based in London. My main experience and expertise is in the financial sector, writing and supporting Realtime and RESTful services for Electronic Trading, Risk and Analytics platforms.</p>

                    <p>I also have an interest in Dev-Ops, and firmly believe that by having a development team involved in the delivery and support of software, leads us to write better and more supportable software.</p>
                </Typography>
            </CardContent>
            <Divider light />
            <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
                <Box p={2}>
                    <Button className={classes.statLabel} href="https://uk.linkedin.com/in/angusiscott" color="primary">LinkedIn</Button>
                </Box>
                <Box p={2}>
                    <Button className={classes.statLabel} href="https://github.com/angusscott" color="primary">GitHub</Button>
                </Box>
            </Box>
        </Card>
    );
};

export default withStyles(styles)(HeadshotCard);
