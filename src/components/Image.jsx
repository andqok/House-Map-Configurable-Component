import React from 'react'
import ReactDOM from 'react-dom'

export default class Image extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props.children)
        let src = this.props.value
        src = Array.isArray(src) ? src : [src]
        return <img src={src[0]}/>
    }
}
