import React, { Component } from 'react';
class DisplayDetails extends Component {
    constructor(props)
    {
        super(props);
        this.formsData=this.props.formsData;
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <ul>
                    <li><h1>Personal Details</h1></li>
                    <li>First Name : {this.formsData.firstName}</li>
                    <li>Last Name : {this.formsData.lastName}</li>
                    <li>Personal Email : {this.formsData.personalEmail}</li>
                    <li>phone Number : {this.formsData.personalPhoneNumber}</li>
                </ul>
                <ul>
                    <li><h1>Business Details</h1></li>
                    <li>Business Name : {this.formsData.businessName}</li>
                    <li>Business Email : {this.formsData.businessEmail}</li>
                    <li>phone Number : {this.formsData.businessPhoneNumber}</li>
                </ul>
                <ul>
                    <li><h1>Bank Details</h1></li>
                    <li>Country : {this.formsData.countryName}</li>
                    <li>Account Number : {this.formsData.accountNumber}</li>
                    <li>IFSC code : {this.formsData.ifscCode}</li>
                </ul>
                <ul>
                    <li><h1>Address</h1></li>
                    <li>City : {this.formsData.city}</li>
                    <li>Post Code : {this.formsData.postCode}</li>
                    <li>Address : {this.formsData.address}</li>
                </ul>
            </div>
        );
    }
}

export default DisplayDetails;