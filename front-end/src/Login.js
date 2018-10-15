import React, { Component } from "react";
import "./App.css";
import axios from 'axios'
class Login extends Component {
  constructor()
  {
    super();
    this.state={
      email:"",
      password:"",
      error:{emailerror:"",passworderror:""}
    }
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleChange(event)
  {
    event.preventDefault();
    this.setState({[event.target.name]:event.target.value});
  }
  
  handleSubmit(event)
  {
    event.preventDefault();
    const payload={
      email:this.state.email,
      password:this.state.password
    }
    axios.post("http://localhost:5000/api/login",payload)
    .then(res=>{
      console.log("response",res);
    })
  }
  render() {
    return (
      <div className="App">     
  <div className="container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card card-signin my-5">
          <div className="card-body">
            <h5 className="card-title text-center">Sign In</h5>
            <form className="form-signin"  onSubmit={this.handleSubmit}>
              <div className="form-label-group">
                <input type="email" id="inputEmail" name="email" value={this.state.email} className="form-control" placeholder="Email address" required autoFocus onChange={this.handleChange} />
                <label htmlFor="inputEmail">Email address</label>
                <span></span>
              </div>

              <div className="form-label-group">
                <input type="password" id="inputPassword" name="password" value={this.state.password} className="form-control" placeholder="Password" required onChange={this.handleChange}/>
                <label htmlFor="inputPassword">Password</label>
              </div>

              {/* <div className="custom-control custom-checkbox mb-3">
                <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
              </div> */}
              <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" >Sign in</button>
            </form>
            <span>Create an Account</span><a href="">Register</a>
          </div>
        </div>
      </div>
    </div>
  </div>

      </div>
    );
  }
}

export default Login;
