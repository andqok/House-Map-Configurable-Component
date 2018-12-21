import React, { Component } from 'react'

const style = {
    p: {
        fontFamily: 'Arial',
        fontSize: '16px',
        padding: '8px'
    }
}

export default class Price extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <p style={style.p}>$ {this.props.field}</p>
    }
}
