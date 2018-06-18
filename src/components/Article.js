import React from 'react';
import ArticleTitle from './ArticleTitle';
import ArticleImage from './ArticleImage';
import ArticleAuthorAndDate from './ArticleAuthorAndDate';
import ArticleDesAndURL from './ArticleDesAndURL';
import ArticleVotes from './ArticleVotes';

const Article = props => (
  <div id="article">
    <ArticleTitle title={props.articleObj.title} />
    <ArticleImage 
      urlToImage={props.articleObj.urlToImage} 
      alt={props.articleObj.title}
    />
    <ArticleAuthorAndDate 
      author={props.articleObj.author} 
      date={props.articleObj.publishedAt} />
    <ArticleDesAndURL 
      desc={props.articleObj.description} 
      url={props.articleObj.url}
    />
    <ArticleVotes votes={props.articleObj.votes}/>
  </div>
);

export default Article;
