import { combineReducers } from 'redux';
import index from './home';
import perguntas from './perguntas';
import cubo from './cubo';
import cadastro from './cadastro';

export default combineReducers({
    index,
    perguntas,
    cubo,
    cadastro
});
