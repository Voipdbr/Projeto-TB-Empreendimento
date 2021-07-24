import api from 'axios';

const apiTB = api.create({
    baseURL: 'http://localhost:5000',
});

export default apiTB; 