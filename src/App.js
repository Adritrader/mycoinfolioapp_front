/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */




// start the Stimulus application

import React from 'react';
import ReactDom from 'react-dom';
import { Container, Row, Col} from 'react-bootstrap';
import Header from "./components/header";
import Footer from "./components/footer";


import "./styles/bootstrap.min.css";
import "./styles/bootstrap.min.css.map";
import "./styles/dataTables.bootstrap5.min.css";


import './styles/app.css';
import './styles/footer.css';
import './styles/login.css';
import './styles/style.css';
import './styles/index.css';
import Login from "./components/login";


class App extends React.Component {

    render() {
        return (
            <Container fluid className="px-0 no-gutters" id="app">
                <Row className="m-0 p-0">
                    <Col className="m-0 p-0">
                          <Header/>
            
                            

                          <Footer/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

ReactDom.render(<App/>, document.getElementById('root'));
export default App;
