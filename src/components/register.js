import React from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';


class Register extends React.Component {

    render() {

        return (
            <Container fluid className="m-0 p-0 no-gutters">
                <Row className="m-0 p-0">
                    <Col className="m-0 p-0">

                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card">
                                        <form onSubmit="event.preventDefault()" method={"POST"} className="box">
                                            <h1>Sign up</h1>
                                            <input type="text" name="_username" placeholder="Username"/>
                                            <input type="email" name="email" placeholder="Email..."/>
                                            <input type="password" name="_password" placeholder="Password"/>
                                            <input type="password" name="_rpassword" placeholder="Repeat password"/>
                                            <input type="file" name="avatar" placeholder="Choose avatar..."/>
                                            <input type="submit" name="" value="Sign up" href="#"/>

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

export default Register;