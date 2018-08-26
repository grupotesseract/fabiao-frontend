import Index from '../components/pages/index';
import QuizPage from '../components/pages/quiz';
import QuizResultado from '../components/pages/quiz/resultado';
import QuizResultadoDetalhes from '../components/pages/quiz/detalhes';
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
        path: '/quiz/detalhes',
        exact: true,
        component: QuizResultadoDetalhes,
        key: 'quiz.detalhes'
    },
    {
        component: PageNotFound,
        key: 'error.404'
    },
]
