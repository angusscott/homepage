import React, {useState} from "react";
import {BrowserRouter as Router, Link as RouterLink, Route, Switch, useLocation} from "react-router-dom";
import routes from "./routes";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {withStyles} from "@material-ui/core";

const styles = (theme) => ({
    appBar: {
        boxShadow: 'none',
        background: 'transparent',
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        paddingRight: theme.spacing(10)
    }
});

const TitleBar = (props) => {

    let {classes} = props;

    const location = useLocation();
    const [value, onValueChange] = useState(routes.findIndex(e => e.route === location.pathname));

    return <AppBar position="fixed" className={classes.appBar}>
        <StyledTabs value={value} onChange={(event, newValue) => onValueChange(newValue)}
              aria-label="simple tabs example">
            {routes.map(route => <StyledTab label={route.title} component={RouterLink} to={route.route}/>)}
        </StyledTabs>
    </AppBar>;
}

const StyledTabs = withStyles({
    flexContainer: {  justifyContent: 'flex-end'},
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        '& > div': {
            maxWidth: 60,
            width: '100%',
            backgroundColor: '#635ee7',
        },
    },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

const StyledTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        color: '#fff',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.spacing(1),
        '&:focus': {
            opacity: 1,
        },
    },
}))((props) => <Tab disableRipple {...props} />);

const App = (props) => {

    return (
        <Router>
            <TitleBar {...props}/>
            <Switch>
                {routes.map(
                    route => {
                        return <Route exact path={route.route}
                                      render={(props) => React.createElement(route.component, {links: route.subRoutes, ...props}, null)}/>
                    }
                )}
            </Switch>
        </Router>


    );
}

export default withStyles(styles)(App);


