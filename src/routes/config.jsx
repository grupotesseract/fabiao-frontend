import Index from '../components/pages/index';
import QuizPage from '../components/pages/quiz';
import QuizResultado from '../components/pages/quiz/resultado';
import QuizResultadoDetalhes from '../components/pages/quiz/detalhes';
import AnalisePage from '../components/pages/analise';
import AnaliseAgradecimento from '../components/pages/analise/agradecimento';
import ContatoPage from '../components/pages/contato';
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
        path: '/analise',
        exact: true,
        component: AnalisePage,
        key: 'analise.index'
    },
    {
        path: '/analise/agradecimento',
        exact: true,
        component: AnaliseAgradecimento,
        key: 'analise.agradecimento'
    },
    {
        path: '/contato',
        exact: true,
        component: ContatoPage,
        key: 'contato.index'
    },
    {
        component: PageNotFound,
        key: 'error.404'
    },
]
