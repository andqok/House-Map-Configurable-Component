import React, { Component } from 'react'
import CardMedia from '@material-ui/core/CardMedia'
import { relative, isAbsolute } from 'path';

const styles = {
    image: {
        height: 0,
        paddingTop: '56.25%',
        position: relative,
    }
}

export default class Image extends Component {
    constructor(props) {
        super(props)
    }
    render() {

        let src = this.props.field
        src = Array.isArray(src) ? src : [src]
        return <CardMedia image={src[0]} style={styles.image} className="image">
            {this.props.children}
        </CardMedia>
    }
}
