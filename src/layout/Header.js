import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header({authenticate, setAuthenticate}) {
  // const headercount = useSelector(state => state.count);
  const headercount = useSelector(state => state.counter.count);
  const setAuthenticateFalse = () =>{
    setAuthenticate(!authenticate)
  }
  return (
    <header className='bg-light py-3'>
    <div className='container'>
      {/* <div className='row'>
        <Col md={5}>
      <h1 className=''>This is my header</h1>
      </Col>
      <Col md={7}>
      <div className='text-end'>
         <h2 className='text-decoration-underline'>Cart{headercount}</h2>
      </div>
      </Col>
      </div> */}
       <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand href="#home">React</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto pe-4">
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
            <Link to="api-data">Abi Data</Link>
            <Link onClick={setAuthenticateFalse}>Logout</Link>
      
        {authenticate = false ? <> 
           <Link to="login">Login</Link>
            <Link to="sign-up">Sign Up</Link>
            </>
            : ""
          }  
            
          </Nav>
        </Navbar.Collapse>
        <Link to="counter" className='cart'>Cart{headercount}</Link>
    </Navbar>
    </div>
    </header>
  )
}

export default Header;
