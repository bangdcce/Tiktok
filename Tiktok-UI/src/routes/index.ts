import { ElementType } from 'react';

import config from '~/configs';

//Layouts
import { HeaderOnly } from '~/layouts';

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
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
];
const privateRoutes: RouteConfig[] = [];

export { privateRoutes, publicRoutes };
