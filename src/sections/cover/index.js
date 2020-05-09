import React from 'react';
import { CoverContainer, CoverTitle, CoverButton, CoverStores } from './style.js';
import AppStore from '../../assets/app-store.png';
import GooglePlay from '../../assets/google-play.png';

function Cover() {
  return (
    <CoverContainer>
      <CoverTitle>Discover, search, and play any song featuring voice control.</CoverTitle>
      <CoverButton>Try it free</CoverButton>
      <CoverStores>
        <img src={AppStore} alt=''/>
        <img src={GooglePlay} alt=''/>
      </CoverStores>
    </CoverContainer>
  );
}

export default Cover;