import React from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';
import { NewsContextProvider } from "./newsContext";
import News from "./newsShow";
import '../styles/style.css';




class Index extends React.Component {

    render() {

        return (
            <Container fluid className="m-0 p-0 no-gutters">
                <Row className="m-0 p-0">
                    <Col className="m-0 p-0">

                        <Breadcrumb>
                            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                        </Breadcrumb>

                        <NewsContextProvider>
                            <News />
                        </NewsContextProvider>


                    </Col>
                </Row>
            </Container>
        );

    }

}

export default Index;