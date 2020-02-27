import React from 'react';
import './Text.css';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const Text = props => {

    return (
        <div className="quote-text">
            <FaQuoteLeft />
            <span id="text"> {props.get_text} </span>
            <FaQuoteRight />
        </div>
    );
}

export default Text;