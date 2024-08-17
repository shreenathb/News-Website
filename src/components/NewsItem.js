import React, { Component } from 'react'

export default class NewsItem extends Component {
    
    render() {
        let {image_url,title, description, news_url} = this.props;
        return (
            <div>
                <div className="card" >
                    <img src={image_url} className="card-img-top" alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href={news_url} target = "_blank" className="btn btn-primary">Read more</a>
                        </div>
                </div>
            </div>
        )
    }
}
