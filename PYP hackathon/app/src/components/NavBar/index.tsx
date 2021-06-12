import { SearchInput } from './SearchInput'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AccountDropdown } from './AccountDropdown'
export const NavBar = () => {
    return (
        <Navbar className="bg-purple" expand="lg">
            <div className="container">
                <Navbar.Brand href="#" className="m-2 uniName">UniSubscribe</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" className="m-2" />
                <Navbar.Collapse id="navbarScroll"  >
                    <div className="container navLinksSerach justify-content-end">
                        <div className="row justify-content-between">
                            <div className="col-lg-6 col-12"> <Nav
                                className="d-flex mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Link className="navLinks" to="/">Home</Link>
                                <Link className="navLinks" to="/services">Services</Link>
                                {/* burada shert lazimdir ki , eger user authenticated'dirse Account Icon Dropdown olsun , else 'Login' linki  */}
                                <Link className="navLinks" to="/login">Login</Link>
                                <AccountDropdown />


                            </Nav>
                            </div>

                            <SearchInput />

                        </div>

                    </div>
                </Navbar.Collapse>

            </div>

        </Navbar >)
}
