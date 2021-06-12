import { SearchInput } from './SearchInput'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export const NavBar = () => {
    return (
        <Navbar className="bg-purple" expand="lg">
            <div className="container">
                <Navbar.Brand href="#" className="m-2 uniName">UniSubscribe</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" className="m-2" />
                <Navbar.Collapse id="navbarScroll"  >
                    <div className="container justify-content-end">
                        <div className="d-flex  justify-content-between">
                            <div className="col-lg-6"> <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Link className="navLinks" to="/">Home</Link>
                                <Link className="navLinks" to="/services">Services</Link>
                                <Link className="navLinks" to="/login">Login</Link>

                            </Nav>
                            </div>

                            <SearchInput />

                        </div>

                    </div>
                </Navbar.Collapse>

            </div>

        </Navbar>)
}
