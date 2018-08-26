import Index from '../components/pages/index';
import QuizPage from '../components/pages/quiz';
import QuizResultado from '../components/pages/quiz/resultado';
import PageNotFound from '../components/errors/404';

export default [
    {
        path: '/',
        exact: true,
        component: Index,
        key: 'index.index'
    },
    {
        path: '/quiz',
        exact: true,
        component: QuizPage,
        key: 'quiz.index'
    },
    {
        path: '/quiz/resultado',
        exact: true,
        component: QuizResultado,
        key: 'quiz.resultado'
    },
    {
        component: PageNotFound,
        key: 'error.404'
    },
]
