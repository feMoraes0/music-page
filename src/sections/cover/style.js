import styled from 'styled-components';
import cover from '../../assets/cover.png'

export const CoverContainer = styled.div({
  'width': '100vw',
  'height': '77.96vh',
  'paddingLeft': '10.41vw',
  'backgroundImage': `url(${cover})`,
  'backgroundRepeat': 'no-repeat',
  'backgroundSize': 'cover',
  'display': 'flex',
  'flex-direction': 'column',
  'justifyContent': 'center',
});

export const CoverTitle = styled.h1({
  'fontFamily': 'SF Pro Text',
  'color': '#F9F8FF',
  'fontSize': '2.5vw',
  'lineHeight': '5.28vh',
  'verticalAlign': 'center',
  'fontStyle': 'normal',
  'maxWidth': '31.77vw',
  'marginBottom': '3.51vh',
});

export const CoverButton = styled.button({
  'fontFamily': 'SF Pro Text',
  'fontWeight': 500,
  'fontSize': '1.04vw',
  'fontHeight': '2.22vh',
  'color': '#F4EEFF',
  'height': '5.09vh',
  'width': '10.99vw',
  'backgroundColor': '#7971E9',
  'borderRadius': '4px',
  'border': 'none',
  'marginBottom': '2.31vh',
});

export const CoverStores = styled.div({
  'display': 'flex',
  'flex-direction': 'row',
  'justifyContent': 'flex-start',
  'alignItems': 'stretch',
  'img:first-child': {
    'marginRight': '0.99vw',
    'width': '7.5vw',
    'height': '4.53vh'
  },
  'img:last-child': {
    'width': '8.64vw',
    'height': '4.53vh'
  }
});
