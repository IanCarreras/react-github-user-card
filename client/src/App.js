import React from 'react'
import axios from 'axios'

import './App.css'

class App extends React.Component {
  state = {}

  componentDidMount() {
    axios.get('https://api.github.com/users/iancarreras')
      .then(res => {
        return this.setState({userData: res.data})
      })
      .catch(err => {
        return err.response
      })

    axios.get('https://api.github.com/users/iancarreras/followers')
      .then(res => {
        this.setState({...this.state, followers: res.data})
      })
      .catch(err => {
        return err.response
      })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        User Card
      </div>
    )
  }
}

export default App