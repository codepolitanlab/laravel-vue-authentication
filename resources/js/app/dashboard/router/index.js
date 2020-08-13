import { Profile } from "../components";

export default [
    {
        path: "/profile",
        component: Profile,
        name: "profile",
        meta: {
            guest: false,
            authenticated: true
        }
    },
]
