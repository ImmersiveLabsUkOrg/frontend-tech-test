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
          'data': Object.entries(result),
        })
      )
  }
  
  render() {
    const { data } = this.state
    const list = data.map((entry, index) => {
      return <li key={index}>{entry[0]} ---- {entry[1]}</li>
    })

    return(
      <div> Immersive Labs Frontend Technical Test
      <div className="card">
        <ul>{list}</ul>
      </div>
      </div>
    );
  }
}

export default App;
