import Projects from "./projects/Projects";
import Homepage from "./home/Homepage";

const routes = [
    {
        title: "Home",
        route: "/",
        component: Homepage,
        subRoutes : []
    },
    {
        title: "Projects",
        route: "/projects",
        component: Projects,
        subRoutes : [
            {
                title: "Lorem Ipsum",
                route: "/projects/lorem-ipsum",
                component: Projects,
                subRoutes : []
            }
        ]
    }
];

export default routes;