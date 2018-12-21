import React from 'react'

export default class Area extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <p>Area {this.props.field}</p>
    }
}
