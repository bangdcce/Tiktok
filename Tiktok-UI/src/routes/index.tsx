import { ElementType } from 'react';

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
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/:nickname', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];
const privateRoutes: RouteConfig[] = [];

export { privateRoutes, publicRoutes };
