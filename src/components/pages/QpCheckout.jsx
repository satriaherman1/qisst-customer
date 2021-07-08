import React from 'react'
import ButtonRed from '@components/atoms/ButtonRed';
import PaymentCard from '@components/molecules/PaymentCard';
import { Link } from 'react-router-dom';
import { ArrowLeftImg , EloImg , ArrowDownImg ,
         BagImg , SavinaImg , ScheduleImg , ArrowUpImg  } from '@components/PathImage'

import '@css/pages/qpCheckout.css';



export default class QpCheckout extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            collapse : 'true'
        }
    }

    handleCollapse = () => {
        if(this.state.collapse == "false"){
            this.setState({
                collapse : "true"
            })
        } 
        else{
            this.setState({
                collapse : "false"
            })
        }

        
    }


    render(){
        return(
            <section className={`container mt-4 ${this.props.className}`}>
                <div className="d-flex align-items-center">
                    <img src={ArrowLeftImg} width={30} alt=""  />
                    <h3 className="txt-black mb-0 ml-3 txt-bold">Pay in 4 Installments</h3>

                </div>
                <br />
                
                <div className="d-flex overflow-x-scroll card-container">
                    <PaymentCard background="card-primary" cardNumber="**** **** **** 3921" cardHolder="Sarah Binte Ahmed" />
                    <PaymentCard background="card-blue" className="ml-4" cardNumber="**** **** **** 3921" cardHolder="Sarah Binte Ahmed" />
                </div>
                <br />
                
                

                <Link to="/newCard">
                    <button className="btn btn-primary txt-small">Add New Card</button>
                </Link>
                <br />

                <p className="txt-bold mt-4">
                    Your Order
                </p>

                <div className="collapse-trigger"  onClick={this.handleCollapse}>
                    <div className="d-flex align-items-center">
                        <div className="img">
                            <img src={EloImg} width={44} alt=""  />
                        </div>

                        <div className="ml-4 header-collapse-trigger ml-3 ">
                            <p className="text-truncate mb-0 d-block" style={{ maxWidth : "200px" }}>
                                SAFINA WOMEN’S VELVET SLEEPING sdjgfuidsgfiuds
                            </p>
                            <p className="mb-0 txt-bold">
                                Rs 1,999.00
                            </p>
                        </div>

                        <div className="collapse-button ml-auto">
                            <img src={this.state.collapse !== "true" ? ArrowDownImg : ArrowUpImg} width={this.state.collapse !== "true" ? 30 : 22} alt=""  />
                        </div>
                    </div>

                </div>

                {/* collapse item */}
                <div className="py-3 collapse-items px-3 mt-4" >
                    <div className="d-flex">
                        <img src={BagImg} width={30}  alt=""  />
                        <p className="ml-3 mb-0 txt-bold txt-black d-flex align-items-center">
                            Detail Items
                        </p>
                    </div>

                    {/* element target for collapse */}
                    <div className={`collapse-target mt-2 ${this.state.collapse == 'true' ? 'h-0' : ''}`} >
                        <div className="d-flex">
                            <img src={SavinaImg} width={50} alt="" srcset="" />

                            <div className="d-flex flex-column ml-3">
                                <p className="txt-bold mb-0 text-truncate" style={{ maxWidth : "170px" }}>
                                    Safina Women’s Velvet Sleeping Suit
                                </p>
                                <span className="small">
                                    Size : XS * Color: ilac
                                </span>
                            </div>

                            <span className="p-2 txt-bold ml-auto" style={{ background : '#FAFAFA' }}>
                                1x
                            </span>
                        </div>

                        <div className="d-flex justify-content-between mt-3">
                            <div className="d-flex flex-column">
                                <p className="mb-2">Sub Total</p>
                                <p className="mb-2">Value Added Tax(VAT)</p>
                                <p className="mb-2">Delivery Charges</p>
                            </div>
                            <div className="d-flex flex-column">
                                <p className="mb-2 txt-bold">Rs1,999.00</p>
                                <p className="mb-2 txt-bold">Rs0,00</p>
                                <p className="mb-2 txt-bold">Rs1,99.00</p>
                            </div>
                        </div>

                        <hr />

                        <div className="d-flex justify-content-between">
                            <span className="txt-primary txt-bold">
                                Order Totals
                            </span>
                            <span className=" txt-bold">
                                Rs2,198.00
                            </span>
                        </div>
                    </div>
                </div>

                <div className="schedule p-3 mt-3">
                    <div className="d-flex">
                        <img src={ScheduleImg} width={25} alt="" srcset="" />
                        <p className="ml-3 mb-0 txt-bold txt-black d-flex align-items-center">
                            Payment Schedule
                        </p>
                    </div>

                    <div className="mt-3 d-flex">
                        <div className="progress-line">
                            <div className="ball-indicator"></div>
                            <div className="line-dashed mx-auto my-1 disabled"></div>
                            <div className="ball-indicator disabled"></div>
                            <div className="line-dashed mx-auto my-1 disabled"></div>
                            <div className="ball-indicator disabled"></div>
                            <div className="line-dashed mx-auto my-1 disabled"></div>
                            <div className="ball-indicator disabled"></div>
                        </div>
                        <div className="timeline d-flex flex-column ml-5">
                            <p>Today</p>
                            <p>Apr 22, 2021</p>
                            <p>May 22, 2021</p>
                            <p>Jun 22, 2021</p>
                            
                        </div>
                        <div className="price d-flex flex-column ml-auto">
                            <p className="txt-bold">Rs549.50</p>
                            <p className="txt-bold">Rs549.50</p>
                            <p className="txt-bold">Rs549.50</p>
                            <p className="txt-bold">Rs549.50</p>
                        </div>
                    </div>
                </div>

                <div className="d-flex mt-3 align-items-center">
                    <input type="checkbox" name="" id="" />
                    <p className="mb-0 ml-3">I Agree to the <span className="txt-bold">Terms and Conditions</span></p>
                </div>

                
                <Link to="payment-success">
                    <ButtonRed className="my-4">
                        Pay
                    </ButtonRed>
                </Link>
                
            </section>
        )
    }
}