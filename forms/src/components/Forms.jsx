import React, { Component } from 'react';
import BankDetails from './BankDetails';
import Address from './Address';
import DisplayDetails from './DisplayDetails';
import Beneficiary from './Benificiary';
import {BrowserRouter as Router,Link, Route,Switch} from 'react-router-dom';
import Personal from './Personal';
import Business from './Business';
import countriesList from './countries.json';
class forms extends Component {
    constructor()
    {
        super();
        this.state={
            firstName:"",
            lastName:"",
            personalEmail:"",
            personalPhoneNumber:"",
            businessName:"",
            businessEmail:"",
            businessPhoneNumber:"",
            countries: countriesList.map((country,index)=>{
                return {value:country.name,label:country.name}
                }),
            countryName: "",
            ifscCode:"",
            accountNumber:"",
            city:"",
            postCode:"",
            address:""
        }
    }

    handleChange=(event)=>{
        const target=event.target;
        const updatedValue=target.value;
        const stateToBeUpdated=target.name;
        this.setState({
            [stateToBeUpdated]:updatedValue
        });
    }
    handleChangeInDropDown=(countryOption)=>{
        this.setState({
            countryName:countryOption[0].value
        });
    }
    render() {
        return (
            <Router>
                <Beneficiary/>
                <Switch>
                   <Route exact path='/'><Personal firstName={this.state.firstName} lastName={this.state.lastName} personalEmail={this.state.personalEmail} personalPhoneNumber={this.state.personalPhoneNumber} handleChange={this.handleChange.bind(this)}/></Route>
                   <Route path='/Business'><Business businessName={this.state.businessName} businessEmail={this.state.businessEmail} businessPhoneNumber={this.state.businessPhoneNumber} handleChange={this.handleChange.bind(this)}/></Route>
                   <Route path='/BankDetails'><BankDetails countries={this.state.countries} countryName={this.state.countryName} ifscCode={this.state.ifscCode} accountNumber={this.state.accountNumber} handleChange={this.handleChange.bind(this)} handleChangeInDropDown={(value)=>this.handleChangeInDropDown(value)}/></Route>
                   <Route path='/Address'><Address city={this.state.city} postCode={this.state.postCode} address={this.state.address}  handleChange={this.handleChange.bind(this)}/></Route>
                   <Route path='/displayDetails'><DisplayDetails formsData={this.state}/></Route>
                </Switch>
            </Router>
        );
    }
}

export default forms;