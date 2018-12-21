import React, { Component } from 'react'
import Image from './Image.jsx'
import Price from './Price.jsx'
import Area from './Area.jsx'
import Address from './Address.jsx'
import Card from '@material-ui/core/Card'

const components = {
    'IMAGE': Image,
    'ADDRESS': Address,
    'PRICE': Price,
    'AREA': Area
}

const styles = {
    card: {
        width: 400,
    },
}

export default class HouseMap extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <Card style={styles.card}>
            { this.props.template.map((item) => {
                let Item = components[item.component]
                let field = this.props.options[ item.field ]
                return <Item key={item.component}
                             field={field}>
                             { this.getChildComponents(item.children) }</Item>
            }) }
        </Card>
    }
    getChildComponents(children) {
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
}
