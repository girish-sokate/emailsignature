import React, {Component} from 'react';
import Locations from '../assets/location.json';

export default class InputForm extends Component{
    constructor(props){
        super(props)
    }  
        


    render(){

        // let locationOption = Locations.locations.map((el, i) => {
        //     return `<option value=' ${el.city} '> ${el.city} </option>`
        // })
      //  console.log('--',Locations.locations);
        const {changed,inputDetails,locationchanged} = this.props;
        return(
            <div className="formbox">
                <div className="tagcontainer">
                    <label>Employee Name</label>
                    <input type="text" name="name" onChange={changed} placeholder="Your name" value={inputDetails.name}></input>
                </div>
                <div className="tagcontainer">
                    <label>Employee Designation</label>
                    <input type="text" name="designation" onChange={changed} placeholder="Your designation" value={inputDetails.designation}></input>
                </div>
                <div className="tagcontainer">
                    <label>Mobile No./Desk Telephone No.</label>
                    <input type="text" name="contact" onChange={changed} placeholder="Your mobile or desk number" value={inputDetails.contact}></input>
                </div>
                <div className="tagcontainer">
                    <label>Email ID</label>
                    <input type="text" name="email" onChange={changed} placeholder="Your email address" value={inputDetails.email}></input>
                </div>
                <div className="tagcontainer">
                    <label>Location</label>
                    <select name="rating"  onChange={locationchanged}>
              {      Locations.locations.map((el, i) => 
            <option key={el.city} value={el.city}>{el.city} </option>
        )}
                     {/* {locationOption} */}
                    </select>
                </div>
                <div className="tagcontainer">
                    <label>Set Signature Width</label>
                    <input type="number" name="signaturewidth" onChange={changed} placeholder="Your email address" value={inputDetails.signaturewidth}></input>
                </div>
            </div>
        )
    }
}