import React from 'react'
import ReactDOM from 'react-dom'

export default class Area extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <p>Area {this.props.value}</p>
    }
}
