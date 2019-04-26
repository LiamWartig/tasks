import React,{Component} from 'react';
import Task from './Task.js';

export default
class App extends Component{


    constructor(props) {
        super(props);
        this.state = {
        	text: "",
            names: ["eg1", "eg2", "eg3"]
        }
    }


       inputChange = (e) => {
        	this.setState({
        		text: e.target.value
        	})
        }

        btnfn = () => {
       	let arr = this.state.names;
        	arr.push(this.state.text);
        	this.setState({
        		names: arr,
        		text: ""
        	})
        }



	render(){
		return(
				<div>
					<input type="text" onChange={this.inputChange} value={this.state.text}/>
					<button type="submit" onClick = {this.btnfn}>Add</button>
				
                {this.state.names.map((name,i) => <li key={"task"+i}><div className="item"><Task text={name}/></div></li>)}
				</div>
			)
	}
}