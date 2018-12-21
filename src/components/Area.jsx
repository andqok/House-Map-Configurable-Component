import React, { Component } from 'react'

const style = {
    p: {
        fontFamily: 'Arial',
        fontSize: '16px',
        padding: '8px'
    }
}

export default class Area extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        if (this.props.field) {
            return <p style={style.p}>{this.props.field} sq. ft</p>
        } else {
            return <span></span>
        }
    }
}
