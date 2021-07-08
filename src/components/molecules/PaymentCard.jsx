import React from 'react';
import '@css/molecules/paymentCard.css'
import { CheckedImg , MasterCardImg } from '@components/PathImage';

export default class PaymentCard extends React.Component{
    constructor(props){
        super(props)
    }

    
    render(){
        return(
            <div className={`payment-card ${this.props.background} ${this.props.className}`}>
                <img src={ CheckedImg } alt="" width={14} className="check-img" />

                <div className="card-number mt-1 ml-3 position-relative text-white">
                    <p className="very-small mb-0" style={{ opacity : ".6" }}>Card Number</p>
                    <span className="txt-normal">{this.props.cardNumber}</span>
                </div>

                <div className="card-holder mt-4 ml-3 position-relative text-white">
                    <p className="very-small mb-0" style={{ opacity : ".6" }}>Card Holder</p>
                    <span className="txt-normal">{this.props.cardHolder}</span>
                </div>

                <img src={ MasterCardImg } alt="" width={40} className="master-card" />
            </div>
        )
    }
}