import React, { Component } from 'react'

export default class Price extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <p>Price {this.props.field}</p>
    }
}
