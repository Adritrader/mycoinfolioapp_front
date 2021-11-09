import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import {Navbar, NavDropdown, Nav } from 'react-bootstrap';
import Register from "./register";
import Index from "./index";
import Login from "./login";
import News from "./news";
import Events from "./events";
import Chart from "./chart";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function NavbarRouter() {
    return (
        <Router>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand className={'mx-3 px-2 bg-white border-1 border-dark rounded'} href="/">
                    <img src="img/logo-mycoinfolio.png" width="30" height="30"
                         className="d-inline-block align-top"/>
                </Navbar.Brand>
                <Navbar.Brand className="px-1" href="/">
                    myCoinFolio
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link className={'px-2'} href="/">Cryptocurrencies</Nav.Link>
                        <Nav.Link className={'px-2'} href="/charts">Charts</Nav.Link>
                        <Nav.Link className={'px-2'} href="/news">News</Nav.Link>
                        <Nav.Link className={'px-2'} href="/events">Events</Nav.Link>
                        <Nav.Link className={'px-2'} href="/analysis">Analysis</Nav.Link>
                    </Nav>
                    
                    <Nav className="col-7 justify-content-end">
                        
                        <Nav.Link className="px-3" href="/login">Login</Nav.Link>
                        <Nav.Link className="px-3" href="/register">
                            Sign Up
                        </Nav.Link>
                        <Nav.Link className="px-3" href="/profile">Profile</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

                {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
                <Routes>
                    
                    <Route path='/' element={<Index/>} />
                    <Route path='/charts' element={<Chart/>} />
                    <Route path='/news' element={<News/>} />
                    <Route path='/events' element={<Events/>} />
                    <Route path='/login' element={<Login/>} />
                    <Route path='/register' element={<Register/>} />
                    <Route path='/profile' element={<Register/>} />
            
                </Routes>
        </Router>
    );
}

