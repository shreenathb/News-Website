import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

    articles = [
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Jessica Klein",
            "title": "Bitcoin Bros Go Wild for Donald Trump",
            "description": "At Bitcoin 2024 conference in Nashville, Trump is finally telling crypto enthusiasts what they want to hear.",
            "url": "https://www.wired.com/story/bitcoin-bros-go-wild-for-donald-trump/",
            "urlToImage": "https://media.wired.com/photos/66a56f21bf2909f08a634953/191:100/w_1280,c_limit/Crypto-Bros-Business-2162975355.jpg",
            "publishedAt": "2024-07-28T12:43:07Z",
            "content": "Trumps speech is an hour behind. A half hour into the wait, restless attendees start chanting Trump. The woman sitting in front of me murmurs her own chant:\r\nBitcoin, bitcointhats what they should be… [+3147 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Joel Khalili",
            "title": "Craig Wright Faces Perjury Investigation Over Claims He Created Bitcoin",
            "description": "By order of a UK judge, Craig Wright can no longer claim he is the creator of bitcoin and now faces the prospect of criminal charges.",
            "url": "https://www.wired.com/story/craig-wright-perjury-bitcoin-trial/",
            "urlToImage": "https://media.wired.com/photos/6696630a5d2d61e4805c3175/191:100/w_1280,c_limit/GettyImages-1979197796.jpg",
            "publishedAt": "2024-07-16T12:58:12Z",
            "content": "A judge in the UK High Court has directed prosecutors to consider bringing criminal charges against computer scientist Craig Wright, after ruling that he lied extensively and repeatedly and committed… [+2851 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Steven Levy",
            "title": "Trump's Crypto Embrace Could Be a Disaster for Bitcoin",
            "description": "At the Bitcoin 2024 conference in Nashville, Donald Trump promised the crypto community the moon. They'd better hope they don't get it.",
            "url": "https://www.wired.com/story/donald-trump-bitcoin-reserve-promises/",
            "urlToImage": "https://media.wired.com/photos/66ab594d0c0cc4819f595db4/191:100/w_1280,c_limit/073024_Crypto%20get%20rich%20quick.jpg",
            "publishedAt": "2024-08-02T13:00:00Z",
            "content": "Donald Trump is an unlikely crypto ally. The power of bitcoin, embodied in Satoshi Nakamotos founding document, is that it frees participants from murky assessments of trust, instead relying on the b… [+4248 chars]"
        }]

    constructor() {
        super();
        this.state = {
            articles: this.articles
        }
    }

    async componentDidMount(){
        let data = await fetch("http://localhost:5000/getNews");
        let parsedData = await data.json();
        this.setState({
            articles : parsedData.articles
        })
    }
    
    render() {

        return (
            <div>
                <div className="container my-3">
                    <div className="row">
                        {this.state.articles?.map((element) => {
                            return(<div className="col-sm-4" key={element?element.url:""} >
                                <NewsItem image_url={element?element.urlToImage:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fyoast.com%2Fthoughts-404-not-found%2F&psig=AOvVaw3RUtObuBIm00FyDrO3f3GX&ust=1723981036305000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDwoP73-4cDFQAAAAAdAAAAABAE"} title={element?element.title:""} description={element?element.description:""} news_url={element?element.url:""} />
                            </div>);
                        })}
                    </div>
                </div>

            </div>
        )
    }
}



