import React from "react";
import Logo from "./../../assets/images/LogoGpac.png"
 
 
const LogoGpac :  React.FC<{}> = () => {
   
    return (
        <div >
      
      <img src={Logo} className="App-logo" alt="logo" />
        </div>
    );


}

export default LogoGpac;