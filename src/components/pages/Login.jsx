import React from 'react'
import PhoneNumberLogin from '@components/organisms/PhoneNumberLogin';
import { Container } from 'react-bootstrap';

export default class Login extends React.Component{


    render(){
        return(
            <Container>
                <PhoneNumberLogin />
            </Container>
        )
    }
}