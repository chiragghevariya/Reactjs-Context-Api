import React ,{ Component }from 'react';
import logo from './logo.svg';
import './App.css';
import CreateContext from "./context/CreateContext";

class App extends Component {

  static contextType = CreateContext;
  
  render(){

      return(
        <CreateContext.Consumer>{(globalData)=>{

          return(
          <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  {globalData.commonData.firstname} {globalData.commonData.lastname}
                </p>
                <p>
                  Mobile No: {globalData.commonData.mobile} 
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header>
          </div>
        )
      }}
          
      </CreateContext.Consumer>

      );
  };
}
export default App;

