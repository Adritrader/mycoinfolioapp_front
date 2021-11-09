import React from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Breadcrumb } from 'react-bootstrap';
import { EventsContextProvider } from "./eventsContext";
import Events from './eventsShow';






class Index extends React.Component {

    render() {

        return (
            <Container fluid className="m-0 p-0 no-gutters">
                <Row className="m-0 p-0">
                    <Col className="m-0 p-0">

                        <Breadcrumb>
                            <Breadcrumb.Item href="#">Events</Breadcrumb.Item>
                        </Breadcrumb>

                        <EventsContextProvider>
                            <Events />
                        </EventsContextProvider>


                    </Col>
                </Row>
            </Container>
        );

    }

}

export default Index;