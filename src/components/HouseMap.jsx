import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Image from './Image.jsx'
import Price from './Price.jsx'
import Area from './Area.jsx'
import Address from './Address.jsx'

const components = {
    'IMAGE': Image,
    'ADDRESS': Address,
    'PRICE': Price,
    'AREA': Area
}

export default class HouseMap extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            template: []
        }
    }
    render() {
        return <div>
            { this.state.template.map((item) => {
                let Item = components[item.component]
                return <Item key={item.component}
                             value={this.props.options[ item.field ]}
                             children={this.props.options.children}/>
            }) }
        </div>
    }
    componentDidMount() {
        axios.get('http://demo4452328.mockable.io/templates')
             .then(response => {
                let chosenTemplate = response.data.filter(el => {
                    return el.id === 3
                })[0].template
                let newState = this.state
                newState.template = chosenTemplate
                this.setState(newState)
             })
    }
}
