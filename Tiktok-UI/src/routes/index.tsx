import { ElementType } from 'react';

import routesConfig from '~/configs/routes';

//Layouts
import { HeaderOnly } from '../components/Layout';

//Page
import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';
import Search from '../pages/Search';

interface RouteConfig {
    path: string;
    component: ElementType;
    layout?: ElementType | null;
}

const publicRoutes: RouteConfig[] = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.search, component: Search, layout: null },
];
const privateRoutes: RouteConfig[] = [];

export { privateRoutes, publicRoutes };
