import React from 'react';
import InputTextSelect from '@components/molecules/InputTextSelect';
import ButtonRed from '@components/atoms/ButtonRed';
import { ArrowLeftImg } from '@components/PathImage';
import { connect } from 'react-redux';

class PhoneNumberLogin extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <section className="my-3">
                <img src={ArrowLeftImg} alt="" width={25} />
                <br />
                <br />
                <h3>Login</h3>
                <br />
                <InputTextSelect label="Phone Number" />

                <br />
                <ButtonRed className={ this.props.disabled == "true" ? "disabled" : "" } >Submit</ButtonRed>

                <p className="small mt-3 text-center">Not Have Account?
                    <a href="" className="txt-red mx-1">
                        SignUp
                    </a>
                    now
                </p>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        disabled : state.disabled
    }
}

export default connect(mapStateToProps)(PhoneNumberLogin)