import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../styles/NavbarComponentStyles.css";

const NavbarComponent = () => {
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };

  const [showMovies, setShowMovies] = useState(false);
  const showDropdownMovies = (e) => {
    setShowMovies(!show);
  };
  const hideDropdownMovies = (e) => {
    setShowMovies(false);
  };

  const [showTvseries, setShowTvseries] = useState(false);
  const showDropdownTvseries = (e) => {
    setShowTvseries(!show);
  };
  const hideDropdownTvseries = (e) => {
    setShowTvseries(false);
  };

  const [showManga, setShowManga] = useState(false);
  const showDropdownManga = (e) => {
    setShowManga(!show);
  };
  const hideDropdownManga = (e) => {
    setShowManga(false);
  };

  const [showBooks, setShowBooks] = useState(false);
  const showDropdownBooks = (e) => {
    setShowBooks(!show);
  };
  const hideDropdownBooks = (e) => {
    setShowBooks(false);
  };
  return (
    <div className="container-new">
      <Row>
        <Navbar>
          <Col>
            <Navbar.Brand className="entertainment" href="/">
              <i class="fa fa-home mr-3"></i>
              Entertainment Tracker
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          </Col>

          <Nav className="mr-auto">
            <Col>
              <NavDropdown
                title="Anime"
                id="navbar-inner"
                show={show}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
              >
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
              <NavDropdown
                title="Movies"
                id="navbar-inner2"
                show={showMovies}
                onMouseEnter={showDropdownMovies}
                onMouseLeave={hideDropdownMovies}
              >
                <NavDropdown.Item href="/movies/watchlist">
                  Watch List
                </NavDropdown.Item>
                <NavDropdown.Item href="/movies/completed">
                  Completed Movies
                </NavDropdown.Item>
                <NavDropdown.Item href="/movies/add">
                  Search Movies
                </NavDropdown.Item>
              </NavDropdown>
            </Col>
            <Col>
              <NavDropdown
                title="Tv Series"
                id="navbar-inner3"
                show={showTvseries}
                onMouseEnter={showDropdownTvseries}
                onMouseLeave={hideDropdownTvseries}
              >
                <NavDropdown.Item href="/tvseries/watchlist">
                  Watch List
                </NavDropdown.Item>
                <NavDropdown.Item href="/tvseries/completed">
                  Completed Tv Series
                </NavDropdown.Item>
                <NavDropdown.Item href="/tvseries/add">
                  Search Tv Series
                </NavDropdown.Item>
              </NavDropdown>
            </Col>
            <Col>
              <NavDropdown
                title="Manga"
                id="navbar-inner4"
                show={showManga}
                onMouseEnter={showDropdownManga}
                onMouseLeave={hideDropdownManga}
              >
                <NavDropdown.Item href="/manga/watchlist">
                  Watch List
                </NavDropdown.Item>
                <NavDropdown.Item href="/manga/completed">
                  Completed Manga
                </NavDropdown.Item>
                <NavDropdown.Item href="/manga/add">
                  Search Manga
                </NavDropdown.Item>
              </NavDropdown>
            </Col>
            <Col>
              <NavDropdown
                title="Books"
                id="navbar-inner5"
                show={showBooks}
                onMouseEnter={showDropdownBooks}
                onMouseLeave={hideDropdownBooks}
              >
                <NavDropdown.Item href="/books/watchlist">
                  Watch List
                </NavDropdown.Item>
                <NavDropdown.Item href="/books/completed">
                  Completed Books
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
