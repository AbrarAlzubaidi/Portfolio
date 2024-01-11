// Header.js
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect } from 'react';

import planet from '../assets/images/planet.png'

export const Header = () => {
    const [activeNav, setActiveName] = useState('home')
    const [isScroll, setIsScroll] = useState(false)
    const [toggleIcon, setToggleIcon] = useState(false)

    const updateActiveLink = (link) => {
        setActiveName(link)
    }

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        }

        window.addEventListener('scroll', onScroll)

        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <Navbar expand="lg" className={isScroll ? "scroll" : ""}>
            <Container>
                <Navbar.Brand href="#home"> <img src={planet} alt='planet'/> Abrar</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={()=> setToggleIcon(!toggleIcon)} aria-expanded={toggleIcon}>
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
                    <Nav className="d-flex">
                        <Nav.Link href="#home" className={activeNav === 'home' ? 'active nav-link' : "nav-link"} onClick={(e) => updateActiveLink("home")}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeNav === 'skills' ? 'active nav-link' : "nav-link"} onClick={(e) => updateActiveLink("skills")}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeNav === 'projects' ? 'active nav-link' : "nav-link"} onClick={(e) => updateActiveLink("projects")}>Projects</Nav.Link>
                    </Nav>
                    <div className='navbar-box'>
                        <div className='social-media'>
                            <a href='https://linkedin.com'>
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                            <a href='https://linkedin.com'>
                                <FontAwesomeIcon icon={faGithubAlt} />
                            </a>
                        </div>
                        <button className='nav-btn' onClick={() => console.log('Clicked')}>
                            <span>
                                Let's Connect
                            </span>
                        </button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
