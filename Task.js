// import React,{Component} from 'react';


// export default
// class Task extends Component{

//     constructor(props) {
//         super(props);
//         this.state = {
//             color: "#FFFFFF"
//         }
//     }

//     inputChange = (e) => {
//             this.setState({
//                 color: e.target.value
//             })
//         }

// 	render(){
// 		return(
// 				<div style={{background: this.state.color}}>
//                 <p> {this.props.text}</p>
//                 <input type="color" onChange={this.inputChange}/>
// 				</div>
// 			)
// 	}
// }



import React, {Component} from 'react';
import App from "./App";
export default class Task{
 
render(){
   return (
                  {App:this.state.descriptions.map((description, i) =>
           <div>
                     <li key={"task" + i}>
                      <div className="item col-sm-11">{description}</div>
                      
                    <div className="status col-sm-1">
                   <button type="submit" onClick={() => {}}>&#10003;</button> </div>
                   </li>
            
              </div>
   )
}
   )
}
}






