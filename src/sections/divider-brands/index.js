import React from 'react';
import { DividerContainer, Image } from './style.js';
import playstation from '../../assets/brands/playstation.png';
import blackberry from '../../assets/brands/blackberry.png';
import redbull from '../../assets/brands/redbull.png';
import sennheiser from '../../assets/brands/sennheiser.png';
import tiktok from '../../assets/brands/tiktok.png';

function DividerBrands() {
  return (
    <DividerContainer>
      <Image src={playstation} width="8.98vw" height="2.96vh"/>
      <Image src={blackberry} width="9.52vw" height="2.96vh"/>
      <Image src={redbull} width="5.78vw" height="2.41vh"/>
      <Image src={tiktok} width="6.51vw" height="2.59vh"/>
      <Image src={sennheiser} width="12.65vw" height="2.31vh"/>
    </DividerContainer>
  );
}

export default DividerBrands;