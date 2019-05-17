import React from 'react';
import LadyWithPhone1 from './LadyWithPhone1.png';
import DeviceGIF from './DeviceGIF.png';
import InsuredGIF from './InsuredGIF.png';
import SelectGIF from './SelectGIF.png';


class MainContent extends React.Component{
render() {
	return(
		<div>
		<main>
		<h1>Insurance that Works for You</h1>
		<h4>Simple. Smart. Affordable</h4>
		</main>
		<div className="picbox">
		<div className="box">
		<select className="dropdowns">
        <option value="blue">Select your Brand</option>
        <option value="blue">Select your Brand</option>
        <option value="blue">Select your Brand</option>
        </select>
        <select className="dropdowns">
        <option value="blue">Select your model</option>
        <option value="blue">Select your model</option>
        <option value="blue">Select your model</option>
        </select>
        <select className="dropdowns">
        <option value="blue">When did you but it?</option>
        <option value="blue">When did you but it?</option>
        <option value="blue">When did you but it?</option>
        </select>
		<button>Get Insured</button>
		</div>
		<div><img src={LadyWithPhone1} alt="LadyWithPhone" className="pic" /></div>
		</div>
		<h1 className="topic">It's Easier than You Think</h1>
		<div className="pictures">
		<div><img src={DeviceGIF} alt="Device" className="Device"/></div>
		<div><img src={SelectGIF} alt="SelectGIF" className="SelectGIF"/></div>
		<div><img src={InsuredGIF} alt="Insured" className="Insured" /></div>
		</div>
		<div className="description">
		<h3 className="firstelement">Tell us about your device</h3>
		<h3>Select a personalized plan</h3>
		<h3>Pay and get insured instantly</h3>
		</div>
		</div>
		)
}
}


export default MainContent;
