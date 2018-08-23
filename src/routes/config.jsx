import Index from '../components/pages/index';
import PageNotFound from '../components/errors/404';

export default [
    {
        path: '/',
        exact: true,
        component: Index,
        key: 'index.index'
    },
    {
        component: PageNotFound,
        key: 'error.404'
    },
]
