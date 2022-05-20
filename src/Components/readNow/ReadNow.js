import React, { useEffect, useState } from 'react';
import newsService from '../../Services/news.service';
import Card from '../displayCard/DisplayCard';
const ReadNow = () => {
    const [readnowlist, setReadnowlist] = useState([]);
    useEffect(() => {
        const token = localStorage.getItem('token')
        newsService.readNews(token)
            .then((res) => {
                setReadnowlist(res.data);
            })
            .catch(err => console.log(err))
    }, []);
    return (
        <section>
            <div className="container my-2" style={{ backgroundColor: 'whitesmoke' }}>

                <div class="row">

                    {readnowlist.map((news, index) => (
                            <Card
                                urlToImage={news.urlToImage}
                                title={news.title}
                                author={news.author}
                                description={news.description}
                                url={news.url}
                                index={index}
                            />
                    ))
                    }
                </div>
            </div>
        </section>
    )
}
export default ReadNow;