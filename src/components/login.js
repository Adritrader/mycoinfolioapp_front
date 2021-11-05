import React from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';


class Login extends React.Component {

    render() {

        return (
            <Container fluid className="m-0 p-0 no-gutters">
                <Row className="m-0 p-0">
                    <Col className="m-0 p-0">

                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card">
                                        <form method="post" className="box"
                                              noValidate>
                                            <h1>Login</h1>
                                            <p className="text-muted"> Please enter your login and password!</p>
                                            <input type="text" name="_username" placeholder="Username"></input>
                                            <input type="password" name="_password" placeholder="Password"></input>


                                            <a className="forgot text-muted" href="#">Forgot password?</a>
                                            <input type="submit" name="" value="Login" href="#"/>

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