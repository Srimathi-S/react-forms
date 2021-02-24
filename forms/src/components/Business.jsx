import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Business extends Component {
    constructor(props)
    {
        super(props);
    }
    render() {
        return (
            <div className="business-form">
                <form>
                    <input placeholder="Business Name" name="businessName" type="text" onChange={this.props.handleChange}/>
                    <input placeholder="Phone number" name="businessPhoneNumber" type="number" onChange={this.props.handleChange}/>
                    <input placeholder="Email" name="businessEmail" type="email" onChange={this.props.handleChange}/>
                    <button type="submit" className="business-submit-button"><Link to='./BankDetails' className="link">Submit</Link></button>
                </form>
            </div>
        );
    }
}

export default Business;