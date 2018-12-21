import React from 'react'
import ReactDOM from 'react-dom'
import Price from './Price.jsx'

export default class Image extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        //console.log(this.props.children)
        let src = this.props.value
        src = Array.isArray(src) ? src : [src]
        return <div>
            {this.props.children}
            <img src={src[0]}/>
        </div>
    }
}
