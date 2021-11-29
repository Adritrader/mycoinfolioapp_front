import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavbarRouter from './navbar';


class Header extends React.Component {

    render() {

        return (
            <Container fluid className="px-0 no-gutters">
                <Row className="m-0 p-0">
                    <Col className="m-0 p-0">
                        <>

                            <NavbarRouter/>

                        </>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Header;