import React from 'react'
import { ArrowLeftImg } from '@components/PathImage';
import { Link } from 'react-router-dom';
import { Row , Col } from 'react-bootstrap';
import InputText from '@components/atoms/InputText';
import ButtonRed from '@components/atoms/ButtonRed';

export default class NewCard extends React.Component{

    render(){
        return(
            <section className="mt-4 mb-3">
                <div className="container">
                    <Link to="qpCheckout">
                        <div className="d-flex align-items-center">
                            <img src={ArrowLeftImg} alt="" width={30} />
                            <h3 className="ml-3 txt-black mb-0">
                            Add New Card
                            </h3>
                        </div>
                    </Link>

                    <Row className="mt-5">
                        <Col md={12}>
                            <InputText placeholder="Name on card" />
                        </Col>
                        <Col md={12}>
                            <InputText placeholder="Card Number" />
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col md={6} sm={6} xs={6}>
                            <InputText placeholder="Expire Date" />
                        </Col>
                        <Col md={6} sm={6} xs={6}>
                            <InputText placeholder="CVC" />
                        </Col>
                    </Row>

                    <div className="d-flex align-items-center mb-4 mt-3">
                        <input type="checkbox" name="" id="" />
                        <p className="ml-2 txt-bold mb-0">Set as default payment method</p>
                    </div>

                    <Link to="/qpCheckout">
                        <ButtonRed className="mt-4">
                            Save
                        </ButtonRed>
                    </Link>
                </div>
            </section>
        )
    }
}