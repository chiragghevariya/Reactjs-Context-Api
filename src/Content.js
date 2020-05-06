import React from 'react';
import CreateContext from "./context/CreateContext";

function Content(){

    return (
        <CreateContext.Consumer>{(globalData)=>{

            return (<div className="App">
            Using Function Content {globalData.commonData.firstname} {globalData.commonData.lastname}
            <p>
                Mobile No: {globalData.commonData.mobile} 
                </p>
            </div>)
            
        }}
        </CreateContext.Consumer>
    );

}
export default Content;

