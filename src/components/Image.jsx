import React from 'react'

export default class Image extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let src = this.props.field
        src = Array.isArray(src) ? src : [src]
        return <div>
            {this.props.children}
            <img src={src[0]}/>
        </div>
    }
}
