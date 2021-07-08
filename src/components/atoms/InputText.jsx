import React from 'react';
import "@css/atoms/inputText.css"
import { connect } from 'react-redux';

 class InputText extends React.Component{

    constructor(props){
        super(props)
    }

    handleChange = (event) => {
        this.props.handleChangeValue(event)
    }

    render(){
        return(
            <div className="d-flex flex-column">
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <div className="input-group mt-1 mb-3 ">
                    <input type="text" onChange={this.handleChange} placeholder={this.props.placeholder} className="input-text" name={this.props.name} id={this.props.id} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        inputValue : state.input
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       
        handleChangeValue : (event) => {
            let value = event.target.value
            let name = event.target.name
            let inputValue = {}
            inputValue[name] = value
            dispatch({type : "CHANGE_INPUT_VALUE" , value : inputValue})
        }
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(InputText)