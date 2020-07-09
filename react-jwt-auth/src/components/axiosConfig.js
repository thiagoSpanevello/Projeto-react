import Axios from "axios";
const tokenProvider = require('axios-token-interceptor');

const axiosConfig = Axios.create(config())
function config() {
    {
        console.log('teste foi um sucesso');
        return {
            baseURL: 'http://localhost:3001',
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
        }
    }
}

axiosConfig.interceptors.request.use(tokenProvider({
    getToken: () => localStorage.getItem('token')
}));


export default axiosConfig;