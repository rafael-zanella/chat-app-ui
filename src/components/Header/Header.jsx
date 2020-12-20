import React from 'react'

import Container, { ExtraItems, Logo, Nav, Search } from './StyledComponents';
import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import { ReactComponent as NotificationIcon } from '../../assets/icons/bell.svg';

export default function Header() {
  return (
    <Container>
      <Logo>
        <LogoIcon />
        <h1>ChatBOT</h1>
      </Logo>
      
      <Nav> 
        <ul>
          <li>Home</li>
          <li>Chat</li>
          <li>Contacts</li>
          <li>Settings</li>
          <li>Help</li>
        </ul>

        <ExtraItems>
          <SearchIcon />
          <NotificationIcon />
        </ExtraItems>
      </Nav>
    </Container>
  )
}
