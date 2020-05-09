import React from 'react';
import { InfoContainer, SubContainer, GaleryGrid, GaleryRow, GridImage, RowImage, Infos, InfoTitle, InfoDescription, Link } from './style.js';
import cover01 from '../../assets/album/cover-01.png';
import cover02 from '../../assets/album/cover-02.png';
import cover03 from '../../assets/album/cover-03.png';
import cover04 from '../../assets/album/cover-04.png';
import cover05 from '../../assets/album/cover-05.png';
import cover06 from '../../assets/album/cover-06.png';
import player01 from '../../assets/player-01.png';
import player02 from '../../assets/player-02.png';

function InfoImageText() {
  return (
    <InfoContainer>
      <SubContainer height='63.88vh'>
        <GaleryGrid>
          <GridImage src={cover01}/>
          <GridImage src={cover02}/>
          <GridImage src={cover03}/>
          <GridImage src={cover04}/>
          <GridImage src={cover05}/>
          <GridImage src={cover06}/>
        </GaleryGrid>
        <Infos>
          <InfoTitle>The music you love</InfoTitle>
          <InfoDescription>With over 60 million tracks and tons of exclusive interviews and videos, TIDAL is here to bring you closer to the artists you listen to.</InfoDescription>
          <Link>More Featured Content</Link>
        </Infos>
      </SubContainer>
      <SubContainer
        height='60.46vh'
        shadow='inset 0px 30px 20px rgba(26, 26, 26, 0.25)'
      >
        <Infos>
          <InfoTitle>Hand-picked playlists</InfoTitle>
          <InfoDescription>Stream guest playlists curated by the artists you love. Also, check out our original playlists hand-picked by our team of experts.</InfoDescription>
          <Link>Discover Radioheat</Link>
        </Infos>
        <GaleryRow>
          <RowImage src={player01}/>
          <RowImage src={player02}/>
        </GaleryRow>
        
      </SubContainer>
    </InfoContainer>
  );
}

export default InfoImageText;