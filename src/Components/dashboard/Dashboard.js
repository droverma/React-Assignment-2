
import React, { useEffect, useState } from 'react';
import Card from '../displayCard/DisplayCard';
import newsService from '../../Services/news.service';
const Dashboard = () => {
    const [newsData, setNewsData] = useState([])
    useEffect(() => {
        newsService.headlines()
            .then((res) => {
                setNewsData(res.data.articles);
            })
            .catch(err => console.log(err))
    }, []);
    return <React.Fragment>
        <section>
            <div className="container my-2" style={{ backgroundColor: 'whitesmoke' }}>
                <div class="col-md-12 text-center my-3">
                    <h2>Top-Headlines</h2>
                </div>
                <hr />
                <div class="row">
                    {newsData.map
                        ((news, index) => (
                            <Card
                                urlToImage={news.urlToImage}
                                title={news.title}
                                author={news.author}
                                description={news.description}
                                index={index}
                                name={news.name}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    </React.Fragment>
}
export default Dashboard;