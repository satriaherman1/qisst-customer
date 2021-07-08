import React from 'react';
import ButtonRed from '../atoms/ButtonRed';
import { ThumbUpImg } from '@components/PathImage';
import { Link } from 'react-router-dom';

export default class SuccessSignUp extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <section className={` ${this.props.className}`}>
                <img src={ ThumbUpImg } width="90%" alt="" className="d-block mx-auto" />

                <h3 className="my-4 text-center">
                    You are all set to begin! 
                </h3>
                <Link to="/qpCheckout">
                    <ButtonRed>Pay Now</ButtonRed>
                </Link>
            </section>
        )
    }
}