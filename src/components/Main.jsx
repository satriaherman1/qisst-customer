import React from 'react';
import Login from '@components/pages/Login';
import QpCheckout from '@components/pages/QpCheckout';
import NewCard from '@components/pages/NewCard';
import PaymentSuccess from '@components/pages/PaymentSuccess';
import SignUp from '@components/pages/SignUp';
import { BrowserRouter , Link , Switch , Route } from 'react-router-dom';
import '@css/main.css'

export default class Main extends React.Component{

    render(){
        return(
            <div className="content">
                <BrowserRouter>
                    
                    <Route exact path="/">
                        <Login />
                    </Route>

                    <Route path="/QpCheckout">
                        <QpCheckout />
                    </Route>

                    <Route path="/newCard">
                        <NewCard />
                    </Route>

                    <Route path="/payment-success">
                        <PaymentSuccess />
                    </Route>

                    <Route path="/sign-up">
                        <SignUp />
                    </Route>

                </BrowserRouter>
            </div>
        )
    }
}