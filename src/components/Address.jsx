import React from 'react'

export default class Address extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <p>Address {this.props.field}</p>
    }
}
