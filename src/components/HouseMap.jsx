import React, { Component } from 'react'
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
const templateId = 3

export default class HouseMap extends Component {
    constructor(props) {
        super(props)
        this.state = {
            template: []
        }
    }
    render() {
        return <div>
            { this.state.template.map((item) => {
                let Item = components[item.component]
                let field = this.props.options[ item.field ]
                return <Item key={item.component}
                             field={field}>
                             { this.getChildComponents(item.children) }</Item>
            }) }
        </div>
    }
    getChildComponents(/** array */ children) {
        if (children && Array.isArray(children)) {
            return children.map((item, index ) => {
                let Item = components[item.component]
                let field = this.props.options[item.field]
                return <Item key={index} field={field}/>
            })
        } else {
            return [null]
        }
    }
    componentDidMount() {
        axios.get('http://demo4452328.mockable.io/templates')
             .then(response => {
                let chosenTemplate = response.data.filter(el => {
                    return el.id === templateId
                })[0].template
                let newState = this.state
                newState.template = chosenTemplate
                this.setState(newState)
             })
    }
}
