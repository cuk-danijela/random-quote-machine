import React from 'react';
import './Text.css';


class Text extends React.Component {

    render() {
        return (
            <>
                <div class="quote-text">
                    <i class="fa fa-quote-left"> </i><span id="text"></span>
                </div>
            </>
        );
    }
}

export default Text;