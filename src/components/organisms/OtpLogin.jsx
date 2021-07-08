import React from 'react';
import OTPInput from 'react-otp-input'
import '@css/organisms/otpLogin.css'
import { connect } from 'react-redux';
import ButtonRed from '@components/atoms/ButtonRed';
import { ArrowLeftImg } from '@components/PathImage';


export default class OtpLogin extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            otp : '' ,
            disabled : 'true'
        }
        
    }

    handleOtpChange = (otp) => { 
        this.setState({ otp })
        if(otp.length == 4){
            this.setState({
                disabled : 'false'
            })
        }
        else{
            this.setState({
                disabled : 'true'
            })
        }

    };

    render(){
        return(
            <section className={`mt-3 ${this.props.className}`}>
                <div onClick={this.props.handleMinus}>
                    <img src={ArrowLeftImg} alt="" width={25} />
                </div>
                <br />
                <br />
                <h3>We Have Sent You A Text Message</h3>
                <p className="txt-bold mt-4">
                    Please enter the verification code we just sent to <br />
                    <a className="txt-blue" >+92 33333333</a>
                </p>

                <div className="otp my-4">
                    <OTPInput value={this.state.otp} onChange={this.handleOtpChange} numInputs={4}  />
                </div>
                <br />

                <p className="txt-bold text-center">
                    Didn't get the code? <a className="txt-red">Resend a New One</a>
                </p>

                <ButtonRed className={`${this.state.disabled == "true" ? "disabled" : ""} txt-bold`}>
                    Submit
                </ButtonRed>

                <p className="text-center mt-4">
                    <a className="txt-red">Change Phone Number</a>
                </p>
            </section>

        )
    }
}


// const mapStateToProps = (state) => {
//     return {
//         disabled : state.disabled
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         handleDisabled : (otp) => {
//             let disabled = "true";
//             if(otp.length == 4){
//                 disabled = "false";
//             }
            
//             else{
//                 disabled = "true"
//             }
//             dispatch({type : "CHANGE_DISABLED" , value : disabled})
//         }
//     }
// }

// export default connect(mapStateToProps , mapDispatchToProps)(OtpLogin)