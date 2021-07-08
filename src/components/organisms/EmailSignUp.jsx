import React from 'react';
import InputText from '@components/atoms/InputText';
import ButtonRed from '@components/atoms/ButtonRed';
import { ArrowLeftImg } from '@components/PathImage';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class EmailSignUp extends React.Component{
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
                <h3>Sign Up</h3>
                <p>
                    Let's Sign Up to dive into the world of choices.
                </p>
                <br />
                <InputText label="Email" name="email_sign_up" id="emailSignUp" />

                <br />
                <ButtonRed className={ this.props.disabled == "true" ? "disabled" : "" } onClick={this.props.handlePlus}>Submit</ButtonRed>

                <p className="small mt-3 text-center">Already Have Account?
                    <Link to="/" className="txt-red mx-1">
                        Login
                    </Link>
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

export default connect(mapStateToProps , mapDispatchToProps)(EmailSignUp)