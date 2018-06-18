import React from 'react';

const ArticleAuthorAndDate = props => (
    <div id="articleAuthorAndDate">
        <p>
            Author: {props.author === null ? "anonymous" : props.author} 
            <span>Date: {props.date}</span>
        </p>
    </div>
);

export default ArticleAuthorAndDate;
