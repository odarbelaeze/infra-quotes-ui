import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quote: {
        quote: 'We are getting you a nice quote...',
        author: 'Your lovely app'
      }
    }
  }

  componentDidMount() {
    this.refreshQuote();
  }

  refreshQuote() {
    fetch('/api/quote/random').then(res => {
      if (res.ok) {
        res.json()
          .then(quote => this.setState({quote}))
          .catch(() => this.failedToGetQuote());
      } else {
        this.failedToGetQuote();
      }
    }).catch(() => this.failedToGetQuote());
  }

  failedToGetQuote() {
    this.setState({
      quote: {
        quote: 'We failed to fetch your quote, Don\'t let that get to you',
        author: 'Your lovely app',
      }
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-quote">
          <p className="App-quote-text">
            {this.state.quote.quote}
          </p>
          <p className="App-quote-author">
            {this.state.quote.author}
          </p>
        </div>
        <button
          onClick={() => this.refreshQuote()}
          className="App-quote-refresh">Give me another</button>
      </div>
    );
  }
}

export default App;
