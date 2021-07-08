import React from 'react';
import '@css/atoms/buttonRed.css'

export default class ButtonRed extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <button className={`button-red ${this.props.className}`} >{this.props.children}</button>
        )
    }
}