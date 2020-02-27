import React, {Component} from 'react';
import './App.css';
import Text from '../Text/Text';
import Author from '../Author/Author';
import SocialButton from '../SocialButton/SocialButton';

class App extends Component {

  state = {
    currentQuote: '',
    currentAuthor: ''
  }

  getData = (currentQuote, currentAuthor) => {
    this.setState({currentQuote, currentAuthor});
  }

  render() {
    const {currentQuote, currentAuthor} = this.state;
    return (
      <div className="App">
        <div id="quote-box">
          <Text get_text={currentQuote}/>
          <Author get_author={currentAuthor}/>
          <SocialButton get_data={this.getData}/>
        </div>
      </div>
    );
  }
}

export default App;
