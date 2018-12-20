import React from 'react'
import ReactDOM from 'react-dom'
import HouseMap from './components/HouseMap.jsx'
import axios from 'axios';

const wrapper = document.getElementById('app')

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      houseMapList: []
    }
  }
  componentDidMount() {
    axios.get('http://demo4452328.mockable.io/properties')
         .then(response => {
          console.log(response.data.data)
          let newState = this.state.houseMapList
          newState.houseMapList = response.data.data
          this.setState(newState)
      }
    )
  }
  render() {
    return <div>
      {
        this.state.houseMapList.map(el =>
        <HouseMap key={el.id} options={el}/>)
      }
    </div>
  }
}

ReactDOM.render(
  <App/>,
  wrapper
);
