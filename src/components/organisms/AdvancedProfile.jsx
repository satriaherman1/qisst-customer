import React from 'react'
import { ArrowLeftImg } from '@components/PathImage'
import { Row , Col , Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import InputText from '@components/atoms/InputText'
import ButtonRed from '@components/atoms/ButtonRed'

export default class AdvancedProfile extends React.Component{
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
                            <InputText label="City" name="sign_up_city" />
                        </Col>
                        <Col md={12}>
                            <InputText label="Address" name="sign_up_address" />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} sm={6} xs={6}>
                            <InputText label="Province" name="sign_up_province" />
                        </Col>
                        <Col md={6} sm={6} xs={6}>
                            <InputText label="Postal Code" name="sign_up_postal_code" />
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