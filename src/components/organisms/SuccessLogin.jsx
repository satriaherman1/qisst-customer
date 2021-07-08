import React from 'react';
import ButtonRed from '../atoms/ButtonRed';
import { SuccessImg } from '@components/PathImage';

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
                <ButtonRed>Pay Now</ButtonRed>
            </section>
        )
    }
}