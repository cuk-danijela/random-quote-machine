import React from 'react';
import './Author.css';


const Author = props => {

    return (
        <div className="quote-author">
            ~ <span id="author">{props.get_author}</span>
        </div>
    );
}

export default Author;