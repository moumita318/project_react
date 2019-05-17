import React,{Component} from 'react';



class Contact extends React.Component {
   render() {
      return (
         <div className="contactContainer">
           <h3 className="connect"><i>feel free to connect with us</i></h3>
           <center>First name:
           <input type="text" className="firstname" value="Mickey"/>
           Last name:
           <input type="text" className="lastname" value="Mouse"/></center>
           <textarea rows="10" cols="120" className="textbox">
        We will be happy if you reach to us .
</textarea>
         </div>

      )
   }
}
export default Contact;