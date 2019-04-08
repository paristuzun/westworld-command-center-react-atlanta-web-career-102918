import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap'
import Headquarters from './components/Headquarters'
import Log from './services/Log'


class App extends Component {

  state = {
    areas: [],
    hosts: [],
    clickedHost: null,
    logs: []
  }

  componentDidMount = () => {
    fetch('http://localhost:4000/areas')
      .then(res => res.json())
      .then(areas => this.setState({areas}))
      
    fetch('http://localhost:4000/hosts')
      .then(res => res.json())
      .then(hosts => this.setState({hosts}))
  }

  render(){
    return (
      <Segment id='app'>
        {/* What components should go here? Check out Checkpoint 1 of the Readme if you're confused */}
      </Segment>
    )
  }
}

export default App;
