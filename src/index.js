import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';


let initialState = {
  input : {

  },
  checkbox : {},
  disabled : "true"
}

// reducer
const rootReducer = (state = initialState, action) => {
  let value = action.value

  if(action.type === 'CHANGE_INPUT_VALUE'){
    
    return {
      ...state,
      input : {...state.input , ...value }
    }
  }
  else if(action.type === 'CHECKED_CHECKBOX'){
    return {
      ...state,
      checkbox : {
        ...state.checkbox , ...value
      }
    }
  }

  else if(action.type === "CHANGE_DISABLED"){
    return {
      ...state,
      disabled : value
    }
  }

  return state;
}

// store
const store = createStore(rootReducer)


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
