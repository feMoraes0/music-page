import styled from 'styled-components';
import cover from '../../assets/cover.png'

export const CoverContainer = styled.div({
  'width': '100vw',
  'height': '77.96vw',
  'backgroundImage': `url(${cover})`,
  'backgroundRepeat': 'no-repeat',
  'backgroundSize': 'contain',
});

export const CoverTitle = styled.h1({
  'fontFamily': 'SF Pro Text',
  'color': '#F9F8FF',
  'fontSize': '2.5vw',
  'lineHeight': '57px',
  'verticalAlign': 'center',
  'fontStyle': 'normal',
  'maxWidth': '31.77vw',
  'marginBottom': '3.51vh',
});