import axios from 'axios';


const http = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
});

export default {

    getPosts : () => {
        return http.get('/posts')
    },

    getUsers: () => {
        return http.get('/users')
    }



}

    
 

