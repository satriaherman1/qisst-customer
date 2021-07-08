import React from 'react';
import "@css/molecules/inputTextSelect.css"
import { connect } from 'react-redux';

 class InputTextSelect extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="d-flex flex-column">
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <div className="input-group mt-1 mb-3 ">
                    <div className="input-group-prepend input-select-prepend">
                        <select name={this.props.selectName} id={this.props.selectId}>
                            <option value="">+92</option>
                        </select>
                    </div>

                    <input type="text" onChange={this.props.handleDisabled} className="input-text-select" name={this.props.name} id={this.props.id} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleDisabled : (event) => {
            let disabled;

            if(event.target.value !== ""){
                disabled = "false"
            }
            else{
                disabled = "true"
            }
            dispatch({type : 'CHANGE_DISABLED' , value : disabled})
        }
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(InputTextSelect)