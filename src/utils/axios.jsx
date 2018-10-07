import axios from 'axios';

if (process.env.NODE_ENV === 'production') {
    axios.defaults.baseURL = process.env.REACT_APP_APIURL;
} else {
    axios.defaults.baseURL = 'https://cors-anywhere.herokuapp.com/https://3d.grupotesseract.com.br/api';
}

export default axios;
