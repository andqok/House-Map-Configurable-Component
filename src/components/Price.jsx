import React from 'react'
import ReactDOM from 'react-dom'

export default class Price extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <p>Price {this.props.value}</p>
    }
}
