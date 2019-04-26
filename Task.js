import React,{Component} from 'react';


export default
class Task extends Component{

    constructor(props) {
        super(props);
        this.state = {
            color: "#FFFFFF"
        }
    }

    inputChange = (e) => {
            this.setState({
                color: e.target.value
            })
        }

	render(){
		return(
				<div style={{background: this.state.color}}>
                <p> {this.props.text}</p>
                <input type="color" onChange={this.inputChange}/>
				</div>
			)
	}
}