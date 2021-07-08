import React from 'react'
import { ArrowLeftImg } from '@components/PathImage'
import { Row , Col , Container } from 'react-bootstrap'
import InputText from '@components/atoms/InputText'
import InputDate from '@components/atoms/InputDate'
import ButtonRed from '@components/atoms/ButtonRed'

export default class CompleteProfile extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
            <section className={`mt-3 ${this.props.className}`}>
               <Container>
                    <img src={ArrowLeftImg} onClick={this.props.handleMinus} alt="" width={30} />

                    <h3 className="my-3">
                        Getting to know <br /> Eachother
                    </h3>

                    <Row>
                        <Col md={12}>
                            <InputText label="First Name" name="sign_up_first_name" />
                        </Col>
                        <Col md={12}>
                            <InputText label="Last Name" name="sign_up_last_name" />
                        </Col>
                        <Col md={12}>
                            <InputDate label="City" name="sign_up_city" />
                        </Col>
                    </Row>

                    <ButtonRed className="mt-4 mb-3" onClick={this.props.handlePlus}>
                        Continue
                    </ButtonRed>
               </Container>
            </section>
        )
    }
}