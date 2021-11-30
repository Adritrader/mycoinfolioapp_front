import React, { Component } from "react";
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import axios from "axios";



class Login extends Component {

    state = {
    
        username: "",
        password: "",
        
      };
    
      onUsernameChange = e => {
        this.setState({
          username: e.target.value
        });
      };
    
      onPasswordChange = e => {
        this.setState({
          password: e.target.value
        });
      };
    
    
      handleSubmit = e => {
        e.preventDefault();
        const data = {
          username: this.state.username,
          password: this.state.password
    
        };
    
        console.log(JSON.stringify(data));
        
    
        axios.post("http://mycoinfolioproject/api/v1/login_check", data)
          .then(res => console.log(res))
          .catch(err => console.log(err));
    
      };

    render() {

        return (
            <Container fluid className="m-0 p-0 no-gutters">
                <Row className="m-0 p-0">
                    <Col className="m-0 p-0">

                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card">
                                    <form onSubmit={this.handleSubmit} className="box">
                                        <h1>Login</h1>
                                        <input type="text" name="username" placeholder="Email" value={this.state.username} onChange={this.onUsernameChange} required/>
                                        <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.onPasswordChange} required/>
                                        <button type="submit" className="btn btn-primary mt-2" value="Signup">Login</button>
                                    </form>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </Col>
                </Row>
            </Container>
        );

    }

}

export default Login;




class Register extends Component {
  state = {
    
    username: "",
    email: "",
    password: "",
    avatar: "",
    roles: "",
    newsletter: "",

  };

  onUsernameChange = e => {
    this.setState({
      username: e.target.value
    });
  };

  onEmailChange = e => {
    this.setState({
      email: e.target.value
    });
  };

  onPasswordChange = e => {
    this.setState({
      password: e.target.value
    });
  };

  onAvatarChange = e => {
    this.setState({
      avatar: e.target.value
    });
  };

  onNewsletterChange = e => {
    this.setState({
      newsletter: e.target.value
    });
  };


  handleSubmit = e => {
    e.preventDefault();
    const data = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      avatar: this.state.avatar,
      newsletter: this.state.newsletter

    };

    console.log(JSON.stringify(data));
    

    axios.post("http://mycoinfolioproject/api/v1/register", data)
      .then(res => console.log(res))
      .catch(err => console.log(err));

  };
  
  
  
  

  render() {
    return (


        <Container fluid className="m-0 p-0 no-gutters">
                <Row className="m-0 p-0">
                    <Col className="m-0 p-0">

                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card">
          
                                    <form onSubmit={this.handleSubmit} className="box">
                                        <h1>Sign up</h1>
                                        <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.onUsernameChange} required/>
                                        <input type="email" name="email" placeholder="Email..." value={this.state.email} onChange={this.onEmailChange} required />
                                        <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.onPasswordChange} required/>
                                        <input type="file" name="avatar" placeholder="Choose avatar..." value={this.state.avatar} onChange={this.onAvatarChange} required/>
                                        <label for="newsletter" className="mr-3">Newsletter&nbsp;&nbsp;&nbsp;<input type="checkbox" id="newsletter" className="checkbox" name="newsletter" placeholder="Newsletter" value={this.state.newsletter} onChange={this.onNewsletterChange} required/></label>
                                        <br/>
                                        <button type="submit" className="btn btn-primary mt-2" value="Signup">Signup</button>
                                    </form>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </Col>
                </Row>
            </Container>


      
    );
  }
}
