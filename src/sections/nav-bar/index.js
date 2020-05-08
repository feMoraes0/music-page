import React from 'react';
import { Container, List, ListItem, ListButton, Logo } from './style.js';
import logo from '../../assets/logo.png';

function NavBar() {
  return (
    <Container>
      <Logo src={logo} alt='logo' />
      <List>
        <ListItem>Contact</ListItem>
        <ListItem>Plans</ListItem>
        <ListItem>Blog</ListItem>
        <ListButton active>sign in</ListButton>
        <ListButton >sign up</ListButton>
      </List>
    </Container>
  );
}

export default NavBar;