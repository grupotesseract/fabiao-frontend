import { combineReducers } from 'redux';
import index from './home';
import perguntas from './perguntas';
import cubo from './cubo';

export default combineReducers({
    index,
    perguntas,
    cubo
});
