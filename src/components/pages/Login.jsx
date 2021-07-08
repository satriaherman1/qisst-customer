import React from 'react'
import PhoneNumberLogin from '@components/organisms/PhoneNumberLogin';
import { Container , Row , Col } from 'react-bootstrap';
import OtpLogin from '@components/organisms/OtpLogin';

export default class Login extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            loginProgress : 1
        }
    }

    handlePlusProgress = () => {
        this.setState((state) => ({
            loginProgress : state.loginProgress + 1
        }))
    }

    handleMinusProgress = () => {
        this.setState((state) => ({
            loginProgress : state.loginProgress - 1
        }))
    }

    render(){
        return(
            <Container>
                <Row>
                    <Col md={6} lg={5} sm={6}>
                        
                         <PhoneNumberLogin handlePlus={this.handlePlusProgress} handleMinus={this.handleMinusProgress} className={ this.state.loginProgress !== 1 ? "d-none" : ""}  /> 
                         <OtpLogin handlePlus={this.handlePlusProgress} handleMinus={this.handleMinusProgress} className={ this.state.loginProgress !== 2 ? "d-none" : ""} /> 
                    </Col>
                </Row>
            </Container>
        )
    }
}