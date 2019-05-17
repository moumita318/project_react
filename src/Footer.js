import React from 'react';
import logo from './logo.png';



class Footer extends React.Component{
	render() {
		return(
			<div className="lowerelement">

			 <div className="row">
          <div className="logofooter"><img src={logo} alt="logo"/></div>
          <div className="text">@ Onsurity All Rights Reserved 2019</div>
        </div>
        <div className="row">
         <div className="text1">Navigation</div>
         <ul className="bullet">
            <li className="bullet1">About</li>
            <li className="bullet1">Products</li>
            <li className="bullet1">Claims</li>
            <li className="bullet1">Plans</li>
            <li className="bullet1">Terms of use</li>
            <li className="bullet1">Site Maps</li>
          </ul>  
        </div>
        
        <div className="row">
          <ul className="bullet2">
            <li className="bullet1">Brand Terms of Use</li>
            <li className="bullet1">Cookie Use</li>
            <li className="bullet1">Privacy Policy</li>
            <li className="bullet1">Support</li>
            <li className="bullet1">Login</li> 
          </ul>
        </div>
          <div className="row">
            <h5>Contact</h5>
            <p className="textallign">info@onsecurity.com</p>
            <p className="textallign">+1234 234 2346</p>
          </div>
    </div>)



			
	}


}

export default Footer;
