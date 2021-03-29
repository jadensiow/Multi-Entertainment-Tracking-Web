import React from "react";
import { Link, withRouter, useState } from "react-router-dom";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import Navbar from "react-bootstrap/Navbar";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownItem from "react-bootstrap/DropdownItem";
import NavLink from "react-bootstrap/NavLink";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../styles/NavbarComponentStyles.css";

const NavbarComponent = () => {
  return (
    <div className="container-new">
      <Row>
        <Navbar>
          <Col>
            <Navbar.Brand className="entertainment" href="/">
              Entertainment Tracker
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          </Col>

          <Nav className="mr-auto">
            <Col>
              <NavDropdown title="Anime" id="navbar-inner">
                <NavDropdown.Item href="/anime/watchlist">
                  Watch List
                </NavDropdown.Item>
                <NavDropdown.Item href="/anime/completed">
                  Completed Anime
                </NavDropdown.Item>
                <NavDropdown.Item href="/anime/add">
                  Search Anime
                </NavDropdown.Item>
              </NavDropdown>
            </Col>
            <Col>
              <NavDropdown title="Movies" id="navbar-inner2">
                <NavDropdown.Item href="/movies/watchlist">
                  Watch List
                </NavDropdown.Item>
                <NavDropdown.Item href="/movies/completed">
                  Comepleted Movies
                </NavDropdown.Item>
                <NavDropdown.Item href="/movies/add">
                  Search Movies
                </NavDropdown.Item>
              </NavDropdown>
            </Col>
            <Col>
              <NavDropdown title="Tv Series" id="navbar-inner3">
                <NavDropdown.Item href="/tvseries/watchlist">
                  Watch List
                </NavDropdown.Item>
                <NavDropdown.Item href="/tvseries/completed">
                  Comepleted Tv Series
                </NavDropdown.Item>
                <NavDropdown.Item href="/tvseries/add">
                  Search Tv Series
                </NavDropdown.Item>
              </NavDropdown>
            </Col>
            <Col>
              <NavDropdown title="Manga" id="navbar-inner4">
                <NavDropdown.Item href="/manga/watchlist">
                  Watch List
                </NavDropdown.Item>
                <NavDropdown.Item href="/manga/completed">
                  Comepleted Manga
                </NavDropdown.Item>
                <NavDropdown.Item href="/manga/add">
                  Search Manga
                </NavDropdown.Item>
              </NavDropdown>
            </Col>
            <Col>
              <NavDropdown title="Books" id="navbar-inner5">
                <NavDropdown.Item href="/books/watchlist">
                  Watch List
                </NavDropdown.Item>
                <NavDropdown.Item href="/books/completed">
                  Comepleted Books
                </NavDropdown.Item>
                <NavDropdown.Item href="/books/add">
                  Search Books
                </NavDropdown.Item>
              </NavDropdown>
            </Col>
          </Nav>
        </Navbar>
      </Row>
    </div>
  );
};

export default withRouter(NavbarComponent);
