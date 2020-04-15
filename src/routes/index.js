import Vue from 'vue';
import Router from "vue-router";
import Home from "../pages/Home";
import Login from '../pages/Login';
import LayoutOverview from '../pages/Layout/Overview';
import LayoutGrid from '../pages/Layout/Grid';
import ComButtons from '../pages/Coms/Buttons';
import ComAlerts from '../pages/Coms/Alerts';
import ContTypography from '../pages/Content/Typography';
import ContImages from '../pages/Content/Images';
//import Profile from '../pages/Dashboard/Profile';
import dashboardNotFound from '../pages/Dashboard/NotFound';
import NotFound from '../pages/NotFound';

Vue.use(Router);

const dashUrl = '/dashboard';

const router = new Router({
	routes: [{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/layout/overview',
			name: 'layout.overview',
			component: LayoutOverview
		},
		{
			path: '/layout/grid',
			name: 'layout.grid',
			component: LayoutGrid
		},
		{
			path: '/componentes/alertas',
			name: 'com.alerts',
			component: ComAlerts
		},
		{
			path: '/componentes/botones',
			name: 'com.buttons',
			component: ComButtons
		},
		{
			path: '/contenido/tipografia',
			name: 'cont.typography',
			component: ContTypography
		},
		{
			path: '/contenido/imagenes',
			name: 'cont.images',
			component: ContImages
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
