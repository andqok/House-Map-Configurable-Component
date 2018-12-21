import React, { Component } from 'react'

export default class Address extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <p>Address {this.props.field}</p>
    }
}
