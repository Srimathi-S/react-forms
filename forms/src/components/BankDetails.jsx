import React, { Component } from 'react';
import Select from 'react-dropdown-select';
import './bankDetails.css'
import { Link } from 'react-router-dom';
class BankDetails extends Component {
    constructor(props)
    {
        super(props);
    }
    render() {
        return (
            <form>
                <Select options={this.props.countries} onChange={(value)=>this.props.handleChangeInDropDown(value)} />
                <input placeholder="IFSC code" name="ifscCode" type="text" onChange={this.props.handleChange}/>
                <input placeholder="Account Number" name="accountNumber" type="text" onChange={this.props.handleChange}/>
                <Link to='/Address'><button>Next</button></Link>
            </form>
        );
    }
}

export default BankDetails;