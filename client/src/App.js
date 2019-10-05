import React from 'react'
import axios from 'axios'

import UserCard from './components/UserCard'
import FollowersList from './components/FollowersList'

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
        return this.setState({...this.state, followers: res.data})
      })
      .catch(err => {
        return err.response
      })
  }

  render() {
    const {userData, followers} = this.state
    return (
      <div className="App">
        <UserCard userData={userData} />
        <h2>Followers</h2>
        <FollowersList followers={followers} />
      </div>
    )
  }
}

export default App