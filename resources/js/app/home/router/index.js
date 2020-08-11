import { Home } from "../components";

export default [
    {
        path: "/",
        component: Home,
        name: "home",
        meta: {
            guest: false,
            authenticated: false
        }
    },
]
