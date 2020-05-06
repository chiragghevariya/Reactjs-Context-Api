import React, { Component } from 'react';
import CreateContext from "./context/CreateContext";

class UpdateContact extends Component{

    static contextType = CreateContext;
    render(){
        const globalData = this.context;
        return (

            <button onClick={globalData.functionData}>Update Contact Number +1</button>
        );
    }
} 

export default UpdateContact;