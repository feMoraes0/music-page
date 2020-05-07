import React from 'react';
import { Container, List, ListItem, ListButton } from './style.js';
import logo from '../../assets/logo.png';

function NavBar() {
  return (
    <Container>
      <img src={logo} alt='' />
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