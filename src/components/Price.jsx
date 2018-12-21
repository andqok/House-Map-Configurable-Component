import React from 'react'

export default class Price extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <p>Price {this.props.field}</p>
    }
}
