import React from 'react'
import { Container } from 'react-bootstrap';
import EmailSignUp from '@components/organisms/EmailSignUp';
import OtpSignUp from '@components/organisms/OtpSignUp';
import CompleteProfile from '@components/organisms/CompleteProfile';
import AdvancedProfile from '@components/organisms/AdvancedProfile';
import SuccessSignUp from '@components/organisms/SuccessSignUp';
import '@css/pages/login.css'

export default class SignUp extends React.Component{
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
                <EmailSignUp handlePlus={this.handlePlusProgress} handleMinus={this.handleMinusProgress} className={ this.state.loginProgress !== 1 ? "d-none" : ""}  /> 
                <OtpSignUp handlePlus={this.handlePlusProgress} handleMinus={this.handleMinusProgress} className={ this.state.loginProgress !== 2 ? "d-none" : ""} /> 
                <CompleteProfile handlePlus={this.handlePlusProgress} handleMinus={this.handleMinusProgress} className={ this.state.loginProgress !== 3 ? "d-none" : ""} /> 
                <AdvancedProfile handlePlus={this.handlePlusProgress} handleMinus={this.handleMinusProgress} className={ this.state.loginProgress !== 4 ? "d-none" : ""} /> 
                <SuccessSignUp handlePlus={this.handlePlusProgress} handleMinus={this.handleMinusProgress} className={ this.state.loginProgress !== 5 ? "d-none" : ""} /> 
            </Container>
        )
    }
}