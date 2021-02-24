import React, { Component } from 'react';
import BankDetails from './BankDetails';
import {Router,Link} from 'react-router-dom';

class Personal extends Component {
    constructor(props)
    {
        super(props);
    }
   
    render() {
        console.log(this.props);
        return (
            <div className="personal-form">
                <form>
                    <input placeholder="First name" name="firstName" type="text" onChange={this.props.handleChange}/>
                    <input placeholder="Last name" name="lastName" type="text" onChange={this.props.handleChange}/>
                    <input placeholder="Phone number" name="personalPhoneNumber" type="number" onChange={this.props.handleChange}/>
                    <input placeholder="Email" name="personalEmail" type="email" onChange={this.props.handleChange}/>
                    <Link to='./BankDetails' className="link"><button type="submit" className="personal-submit-button">Submit</button></Link>
                </form>
            </div>
        );
    }
}

export default Personal;
