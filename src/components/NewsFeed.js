import React, { Component } from "react";
import { articles } from '../seedData';
import Article from './Article';

class NewsFeed extends Component {
  constructor() {
    super();
    this.state = {
      articles: articles
    };
  }

  render() {
    return this.state.articles.map((article, i) => {
      return <Article key={i} articleObj={article} /> ;
    });
  }
}

export default NewsFeed;
