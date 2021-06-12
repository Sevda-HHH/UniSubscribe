import React from 'react'
import { NavDropdown } from 'react-bootstrap'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export const AccountDropdown = () => {
    return (
        <NavDropdown className="bg-purple pb-2" title={<AccountCircleIcon className="text-white accountIcon" />} id="basic-nav-dropdown"  >
            <NavDropdown.Header >user@email.com</NavDropdown.Header>
            <NavDropdown.Item href="#action/3.1">My Profile </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">My Subscribtions</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.3"><b className="text-danger">Logout</b></NavDropdown.Item>
        </NavDropdown>
    )
}

