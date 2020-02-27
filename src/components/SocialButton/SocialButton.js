import React, { Component } from 'react';
import './SocialButton.css';
import axios from 'axios';
import { FaTwitter, FaFacebookF } from 'react-icons/fa'

const END_POINT = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

class SocialButton extends Component {

    getQuotes = async () => {
        try {
            const response = await axios.get(END_POINT);
            const quotes = response.data.quotes;
            this.getRandomQuote(quotes);
        } catch (error) {
            console.error(error);
        }
    };

    getRandomQuote = (quotesData) => {
        const quote = quotesData[Math.floor(Math.random() * quotesData.length)];
        this.props.get_data(quote.quote, quote.author);
    };

    componentDidMount() {
        this.getQuotes();
    }

    render() {
        return (
            <div className="buttons">
                <a className="button" href="twitter.com/intent/tweet" id="tweet-quote" title="Tweet this quote!" target="_blank"> <FaTwitter /> </a>
                <a className="button" href="facebook.com/intent/post" id="facebook-quote" title="Post this quote!" target="_blank"> <FaFacebookF /> </a>
                <button className="button" id="new-quote" onClick={this.getQuotes}>Next quote</button>
            </div>
        );
    }
}

export default SocialButton;






