import React, { Component } from 'react';
import CreateContext from './CreateContext';

class DefaultProvider extends Component{

  state = {

    firstname:"Chirag",
    lastname:"Patel",
    mobile:"9999999999",
  }

  ChangeNumber = () =>{
    
    this.setState({mobile:parseFloat(this.state.mobile)+parseFloat(1)})
  }

  render(){

    return (
      <CreateContext.Provider value={{commonData:this.state,functionData:this.ChangeNumber}}>
        {this.props.children}
    </CreateContext.Provider>

    );
  }
}

export default DefaultProvider;
