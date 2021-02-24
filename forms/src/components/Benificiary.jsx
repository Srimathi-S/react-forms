import React, { Component } from 'react';
import Personal from './Personal';
import Business from './Business';
import {BrowserRouter as Router,Link, Route,Switch} from 'react-router-dom'
import './benificiary.css'

class Beneficiary extends Component {
   
    render() {
        return (
                <div className='user-type-selector'>
                <button ><Link to="/" className="link">Personal</Link></button>
                <button ><Link to="/Business" className="link" id="business">Business</Link></button>
                </div>
        );
    }
}

export default Beneficiary;
