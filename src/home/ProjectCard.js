import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from "@material-ui/core/Typography";
import {withStyles} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

const styles = (theme) => ({

    root: {
        borderRadius: 20,
    },
    content: {
        padding: 24,
    },
    header: {
        padding: `4px 24px 0`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    avatar: {
        width: 48,
        height: 48,
        transform: 'translateY(50%)',
        '& > img': {
            margin: 0,
            backgroundColor: theme.palette.common.white,
        }
    },
    divider: {
        backgroundColor: theme.palette.grey[200],
        marginBottom: 23
    },
    extra: {
        textTransform: 'uppercase',
        fontSize: 14,
        color: theme.palette.grey[500],
        letterSpacing: '1px',
    },
    overline: {
        textTransform: 'uppercase',
        color: '#9e9e9e',
        marginBottom: '0.35em',
        fontWeight: 'bold',
        letterSpacing: '2px',
        fontSize: 16,
        display: 'inline-block',
    },
    heading: {
        fontSize: 24,
        fontWeight: 900,
        marginBottom: '0.72em',
    },
    body: {
        fontSize: 16,
        color: theme.palette.text.primary,
        lineHeight: 1.75,
    },
});

const ProjectCard = (props) => {
    let {classes, technologies, overline, heading, body, url} = props;
    return (
        <Card className={classes.root}>
            <div className={classes.header}>
                <Avatar alt={'logo'} className={classes.avatar}
                        src={''}/>
                <Typography className={classes.extra}>{technologies}</Typography>
            </div>
            <hr className={classes.divider}/>

            <CardContent className={classes.content}>
                <Typography component={'span'} className={classes.overline}>
                    {overline}
                </Typography>
                <Typography component={'h4'} className={classes.heading}>
                    {heading}
                </Typography>
                <Typography className={classes.body}>
                    {body}
                </Typography>
            </CardContent>
            <Divider light/>
            <Box display={'flex'} alignItems={'center'} justifyContent={'space-evenly'}>
                <Box p={2}>
                    <Button className={classes.statLabel} href={url}
                            color="primary">GitHub</Button>
                </Box>
            </Box>
        </Card>
    );
};

export default withStyles(styles)(ProjectCard);