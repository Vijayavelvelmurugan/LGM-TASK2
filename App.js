import './App.css';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';

const LgmUser = () => {
  const [users, setUsers] = useState([]);

  const fetchUserData = () => {
    fetch("https://reqres.in/api/users?page=1")
      .then(response => response.json())
      .then(data => {
        setUsers(data.data); 
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  const redYellow = () => {
    fetchUserData();
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">LGM-Student</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={redYellow} href="">User Details</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='apicontainer'>
        {users.length === 0 ? (
          <p>Loading...</p>
        ) : (
        <>
            {users.map(user => (
              <Card key={user.id} className='cardcontainer'>
                <Card.Img variant="top" src={user.avatar} />
                <Card.Body>
                  <Card.Title>{user.first_name} {user.last_name}</Card.Title>
                  <Card.Title>{user.email} </Card.Title>
                  <Card.Title>{user.id}</Card.Title>
                </Card.Body>
              </Card>
            ))}
          </>
        )}
      </div>
    </>
  );
};

const App = () => {
  return (
    <div>
      <LgmUser />
    </div>
  );
}

export default App;

