import React from 'react';
import ButtonRed from '../atoms/ButtonRed';
import { SuccessImg } from '@components/PathImage';
import { Link } from 'react-router-dom';

export default class SuccessLogin extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <section className={` ${this.props.className}`}>
                <img src={ SuccessImg } width="100%" alt="" srcset="" />

                <h3 className="my-5 text-center">
                    Successfully Logged In
                </h3>
                <Link to="/qpCheckout">
                    <ButtonRed>Pay Now</ButtonRed>
                </Link>
            </section>
        )
    }
}