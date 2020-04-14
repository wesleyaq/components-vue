import Vue from 'vue';
import Router from "vue-router";
import Home from "../pages/Home";
import Login from '../pages/Login';
//import Profile from '../pages/Dashboard/Profile';
import dashboardNotFound from '../pages/Dashboard/NotFound';
import NotFound from '../pages/NotFound';

Vue.use(Router);

const dashUrl = '/dashboard';

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        /*{
            path: `${dashUrl}/perfil`,
            name: 'dashboard.profile',
            component: Profile,
            beforeEnter: function (to, from, next) {
                isLogged(to, from, next);
            }
        },*/
        {
            path: `${dashUrl}/*`,
            name: 'dashboard-404',
            component: dashboardNotFound
        },
        {
            path: '*',
            name: '404',
            component: NotFound
        }
    ],
    mode: 'history'
});

export default router;