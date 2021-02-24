import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Address extends Component {
    constructor(props)
    {
        super(props);
    }
    render() {
        return (
            <form>
                <input placeholder="City" name="city" type="text" onChange={this.props.handleChange}/>
                <input placeholder="Postcode" name="postCode" type="text" onChange={this.props.handleChange}/>
                <input placeholder="Address" name="address" type="text" onChange={this.props.handleChange}/>
                <Link to='./displayDetails' className="link"><button type="submit">Submit</button></Link>
            </form>
        );
    }
}

export default Address;