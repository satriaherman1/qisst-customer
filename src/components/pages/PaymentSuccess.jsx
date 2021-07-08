import React from 'react'
import { Container } from 'react-bootstrap'
import { SuccessImg , SavinaImg , ArrowRightImg } from '@components/PathImage'
import ButtonRed from '../atoms/ButtonRed'
import '@css/pages/paymentSuccess.css'

export default class PaymentSuccess extends React.Component{

    render(){
        return(
            <section className="mb-3">
                <div className="payment-success-header py-4">
                    <img src={ SuccessImg } width="40%" className="d-block mx-auto" alt="" />

                    <p className="txt-bold text-white text-center">
                        Thank you for placing an order!
                    </p>
                </div>
                <Container>

                    <div className="py-4">
                        <span>
                            Order #4523
                        </span>

                        <div className="d-flex w-100 mt-3">
                           
                            <img src={SavinaImg} alt="" height="100vh" />

                            <div className="ml-4">
                                <p className="mb-2 " style={{ maxWidth : "100%" }}>
                                    SAFINA WOMEN’S VELVET SLEEPING SUIT
                                </p>

                                <span className="border p-1 small txt-gray">XS</span>

                                <p className="txt-gray small mt-2">
                                    Total : <span className="txt-bold ml-2 txt-black">Rs2,198.00</span>
                                </p>    
                            </div>
                        </div>

                        <span className="txt-black txt-normal txt-bold d-block my-4">
                            Payment Schedule
                        </span>

                        <div className="d-flex mt-3">
                            <div className="background-blue p-3 h-fit rounded">
                                <span className="txt-bold text-white">
                                    PKR
                                </span>
                            </div>
                            <div className="ml-3">
                                <p className="txt-black txt-bold mb-0">
                                    First Payment
                                </p>
                                <p className="txt-gray d-flex align-items-center">
                                    Today <span className="mx-1 rounded-clip d-inline-block background-gray dot"></span> 15:36 
                                </p>
                            </div>
                            <div className="ml-auto">
                                <div className="d-flex align-items-center">
                                    <div>
                                        <p className="txt-black txt-bold mb-0">
                                            Rs549.50
                                        </p>
                                        <p className="txt-blue txt-bold small d-flex align-items-center mb-0">
                                            Pay Now 
                                        </p>
                                    </div>
                                    <div className="ml-2">
                                        <img src={ ArrowRightImg } alt="" width={35} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* schedule */}
                        <div className="d-flex mt-3">
                            <div className="background-orange p-3 h-fit rounded">
                                <span className="txt-bold text-white">
                                    PKR
                                </span>
                            </div>
                            <div className="ml-3">
                                <p className="txt-black txt-bold mb-0">
                                    First Payment
                                </p>
                                <p className="txt-gray d-flex align-items-center">
                                    Apr 22, 2021 
                                </p>
                            </div>
                            <div className="ml-auto">
                                <div className="d-flex align-items-center">
                                    <div>
                                        <p className="txt-black txt-bold mb-0">
                                             Rs549.50
                                        </p>
                                        <p className="txt-red txt-bold small d-flex align-items-center mb-0">
                                            Pay Now 
                                        </p>
                                    </div>
                                    <div className="ml-2">
                                        <img src={ ArrowRightImg } alt="" width={35} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end schedule */}

                        {/* schedule */}
                        <div className="d-flex mt-3">
                            <div className="background-orange p-3 h-fit rounded">
                                <span className="txt-bold text-white">
                                    PKR
                                </span>
                            </div>
                            <div className="ml-3">
                                <p className="txt-black txt-bold mb-0">
                                    First Payment
                                </p>
                                <p className="txt-gray d-flex align-items-center">
                                    May 22, 2021 
                                </p>
                            </div>
                            <div className="ml-auto">
                                <div className="d-flex align-items-center">
                                    <div>
                                        <p className="txt-black txt-bold mb-0">
                                            Rs549.50
                                        </p>
                                        <p className="txt-red txt-bold small d-flex align-items-center mb-0 disabled">
                                            Pay Now 
                                        </p>
                                    </div>
                                    <div className="ml-2">
                                        <img src={ ArrowRightImg } alt="" width={35} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end schedule */}

                        {/* schedule */}
                        <div className="d-flex mt-3">
                            <div className="background-orange p-3 h-fit rounded">
                                <span className="txt-bold text-white">
                                    PKR
                                </span>
                            </div>
                            <div className="ml-3">
                                <p className="txt-black txt-bold mb-0">
                                    First Payment
                                </p>
                                <p className="txt-gray d-flex align-items-center">
                                    May 22, 2021 
                                </p>
                            </div>
                            <div className="ml-auto">
                                <div className="d-flex align-items-center">
                                    <div>
                                        <p className="txt-black txt-bold mb-0">
                                            Rs549.50
                                        </p>
                                        <p className="txt-red txt-bold small d-flex align-items-center mb-0 disabled">
                                            Pay Now
                                        </p>
                                    </div>
                                    <div className="ml-2">
                                        <img src={ ArrowRightImg } alt="" width={35} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end schedule */}

                    <ButtonRed className="mt-5">
                        Return Home
                    </ButtonRed>
                    </div>
                </Container>
            </section>
        )
    }
}