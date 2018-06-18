import React from 'react';

const ArticleImage = props => (
    <div id="article-image">
        <img src={props.urlToImage} alt={props.alt} />
    </div>
); 

export default ArticleImage;
