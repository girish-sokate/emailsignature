import React, { Component } from 'react';
import InputForm from './InputForm';
import Emailpreview from './emailpreview';
import Locations from '../assets/location.json';

export default class EmailGenerator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            empdetails: {
                name: '',
                designation: '',
                contact: '',
                email: '',
                location: 'Mumbai',
                signaturewidth: '380'
            },
            location: {
                city: "Mumbai",
                address: "The Great Oasis Plot No. D-13 4th Floor, Road No. 21 Andheri (East) Mumbai - 400 093"
            }
            
        }
    }
    evaluation(e) {
        let { empdetails } = this.state;
        const { name, value } = e.target;
        empdetails[name] = value;
        this.setState({ empdetails });
    }

    setLocation(e){
        let { location } = this.state;
        const selLocation = e.target.value
       // console.log(e.target.value);
        location = Locations.locations.find((el) => el.city === selLocation);
       // console.log(location);
        this.setState({ location });
    }



    render() {
        return (
            <div>
                <InputForm locationchanged={(e) => this.setLocation(e)} changed={(e) => this.evaluation(e)} inputDetails={this.state.empdetails}></InputForm>
                <div className="previewbox">
                    <Emailpreview location={this.state.location} empDetails={this.state.empdetails}></Emailpreview>
                </div>
            </div>
        )
    }
}