import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
    state = {
        user: "Sunisa",
        password: "Pa$$w0rd",
        address: {
             houseNo: "345/167",
             province: " Bangkok"
       }
    }
    userClick = () => {
        this.setState({
           user:"Akarapong",
           password: "P@ssw0rd",
        });
    }
    render() {
         return (
             <div className="container">
                 <div className="row">
 	        <div className="col-12 col-sm-6 mx-auto mt-5">
 		<div className="card l-5 mr-5">
 		     <div className="card-header text-right">
 		        <button className="btn btn-successbtn-sm" 
                onClick={this.userClick}>
				    Click
                </button>
		    </div>
 		    <div className="card-body">
 		         user: <span className="ml-2">
			{this.state.user}</span> <br />
		         password: <span className="ml-2">
			{this.state.password}</span> <br />
 		         address: <span className="ml-2">
			{this.state.address.houseNo}
			</span>
 			<span className="ml-1">{this.
			state.address.province}</span>
 		      </div>
 		</div>
 	        </div>
                 </div>
 	</div>
          )
      }
 }
 export default App