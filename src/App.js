import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()

    this.state = {
    'data': [],
  }
}
  componentDidMount() {
    const url = "https://api.github.com/users/stonefarmer9"

    fetch(url)
      .then(result => result.json())
      .then(result => this.setState({
          'data': result,
        })
      )
  }
  render() {
    const { data } = this.state
    const results = Object.entries(data)
    const list = results.map((entry, index) => {
      return <li key={index}>{entry[0]}----{entry[1]}</li>
    })

    return(
      <div> Immersive Labs Frontend Techical Test
      <div className="card">
        <ul>{list}</ul>
      </div>
      </div>
    );
  }
}

export default App;
