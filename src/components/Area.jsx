import React, { Component } from 'react'

export default class Area extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <p>Area {this.props.field}</p>
    }
}
