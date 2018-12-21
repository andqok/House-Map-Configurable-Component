import React from 'react'
import ReactDOM from 'react-dom'
import HouseMap from './components/HouseMap.jsx'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'

const wrapper = document.getElementById('app')

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      houseMapList: [],
      templateId: 3,
      templates: []
    }
  }
  componentDidMount() {
    axios.all([
      axios.get('http://demo4452328.mockable.io/properties'),
      axios.get('http://demo4452328.mockable.io/templates')
    ])
    .then(axios.spread((propRes, templRes) => {
        let newState = Object.assign(this.state)
        newState.houseMapList = propRes.data.data
        newState.templates = templRes.data
        this.setState(newState)
    }))

  }
  render() {
    let chosenTemplate = this.state.templates.filter(el => {
      return el.id === this.state.templateId
    })[0]
    if (typeof chosenTemplate === 'object') {
      chosenTemplate = chosenTemplate.template
    }

    return <Grid container spacing={16} >
      {
        this.state.houseMapList.map(el =>
          <Grid>
            <HouseMap
              item
              key={el.id}
              options={el}
              template={chosenTemplate}/>
          </Grid>
          )
      }
    </Grid>
  }
}

ReactDOM.render( <App/>, wrapper )
