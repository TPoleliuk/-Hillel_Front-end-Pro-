import Router from "@/plugins/router";
import Movies from "@/pages/movies/Movies";
import SignIn from "@/pages/signIn/SignIn";
import NotFound from "@/pages/not-found/NotFound";
import SignUp from "@/pages/signUp/SignUp";

const routes = [
    {
        path: '/',
        component: Movies,
    },
    {
        path: '/sign-in',
        component: SignIn,
        beforeEach() {

        }
    },
    {
        path: '/sign-up',
        component: SignUp,
    },
    {
        path: '*',
        component: NotFound,
    }
];

export const router = new Router(routes);

const isAuth = false;
router.beforeEach(function (from, to, next) {
    if (isAuth) {
        next();
        return;
    };

    if (to === '/sign-up') {
        next();
        return;
    };

    next('/sign-in');
});