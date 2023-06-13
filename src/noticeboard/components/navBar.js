import React, { useState , useContext } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import AuthContext from '../store/auth-context';

export default function NavBar(props) {
  const auth =useContext(AuthContext)
  const [showBasic, setShowBasic] = useState(false);

  const logoutHandler = () => {
    props.onLogout();
  }
  return (
   
          <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>Brand</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
          
            <MDBNavbarItem>
            {auth.isLoggedIn && (
            
              <MDBNavbarLink active aria-current='page' href='#'>
                Home
              </MDBNavbarLink>
             )}
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink onClick={logoutHandler} hidden={!auth.isLoggedIn}>logout</MDBNavbarLink>
            </MDBNavbarItem>
            {auth.isLoggedIn && (
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                  Dropdown
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Action</MDBDropdownItem>
                  <MDBDropdownItem link>Another action</MDBDropdownItem>
                  <MDBDropdownItem link>Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
            )}
          </MDBNavbarNav>
            
          
         
        
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    
  );
}