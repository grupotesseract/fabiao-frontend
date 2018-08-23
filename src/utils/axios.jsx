import axios from 'axios';

if (process.env.NODE_ENV === 'production') {
    axios.defaults.baseURL = process.env.REACT_APP_APIURL;
} else {
    axios.defaults.baseURL = 'https://localhost';
}

export default axios;
