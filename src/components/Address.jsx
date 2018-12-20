import React from 'react'
import ReactDOM from 'react-dom'

export default class Address extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <p>Address {this.props.value}</p>
    }
}
