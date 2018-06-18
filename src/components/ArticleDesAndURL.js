import React from 'react';

const ArticleDesAndURL = props => (
    <div>
        <p>{props.desc}</p>
        <a href={props.url}>Read More...</a>
    </div>

);

export default ArticleDesAndURL;
