import React from 'react';
import InputTextSelect from '@components/molecules/InputTextSelect';
import ButtonRed from '@components/atoms/ButtonRed';
import { ArrowLeftImg } from '@components/PathImage';
import { connect } from 'react-redux';

class PhoneNumberLogin extends React.Component{
    constructor(props){
        super(props)
        
        this.props.initializeDisabled()
    }

    render(){
        return(
            <section className={`mt-3 ${this.props.className}`}>
                <img src={ArrowLeftImg} alt="" width={25} onClick={this.props.hanldeMinus}/>
                <br />
                <br />
                <h3>Login</h3>
                <br />
                <InputTextSelect label="Phone Number" />

                <br />
                <ButtonRed className={ this.props.disabled == "true" ? "disabled" : "" } onClick={this.props.handlePlus}>Submit</ButtonRed>

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

// change disabled to true when page loaded first time

const mapDispatchToProps = (dispatch) => {
    return {
        initializeDisabled : () => {
            dispatch({type : 'CHANGE_DISABLED' , value : "true"})
        }
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(PhoneNumberLogin)