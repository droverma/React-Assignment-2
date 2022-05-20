import axios from 'axios';
class NewsService {
    headlines() {
        return axios.get("https://newsapi.org/v2/top-headlines?country=in&apikey=722b8b3233614f0eb949fb2f810baa69&page=1")
    }
    login(userData) {
        return axios
            .post('http://localhost:3001/auth/v1/', userData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
    }
    authenticated(token) {
        return axios
            .post('http://localhost:3001/auth/v1/isAuthenticated', {},{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            })
    }
    readNews(token) {
        return axios.get("http://localhost:3001/api/v1/news",
            { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` } },
        )
    }

}

export default new NewsService();