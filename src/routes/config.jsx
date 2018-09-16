import Index from '../components/pages/index';
import QuizPage from '../components/pages/quiz';
import QuizResultado from '../components/pages/quiz/resultado';
import QuizResultadoDetalhes from '../components/pages/quiz/detalhes';
import CadastroPage from '../components/pages/cadastro';
import AnalisePage from '../components/pages/analise';
import AnaliseAgradecimento from '../components/pages/analise/agradecimento';
import ContatoPage from '../components/pages/contato';
import PageNotFound from '../components/errors/404';

export default [
    {
        path: '/posicionamento-estrategico/',
        exact: true,
        component: Index,
        key: 'index.index'
    },
    {
        path: '/posicionamento-estrategico/quiz',
        exact: true,
        component: QuizPage,
        key: 'quiz.index'
    },
    {
        path: '/posicionamento-estrategico/quiz/resultado',
        exact: true,
        component: QuizResultado,
        key: 'quiz.resultado'
    },
    {
        path: '/posicionamento-estrategico/cadastro',
        exact: true,
        component: CadastroPage,
        key: 'cadastro.index'
    },
    {
        path: '/posicionamento-estrategico/quiz/detalhes',
        exact: true,
        component: QuizResultadoDetalhes,
        key: 'quiz.detalhes'
    },
    {
        path: '/posicionamento-estrategico/analise',
        exact: true,
        component: AnalisePage,
        key: 'analise.index'
    },
    {
        path: '/posicionamento-estrategico/analise/agradecimento',
        exact: true,
        component: AnaliseAgradecimento,
        key: 'analise.agradecimento'
    },
    {
        path: '/posicionamento-estrategico/contato',
        exact: true,
        component: ContatoPage,
        key: 'contato.index'
    },
    {
        component: PageNotFound,
        key: 'error.404'
    },
]
