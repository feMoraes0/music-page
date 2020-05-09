import styled from 'styled-components';

export const InfoContainer = styled.div({
  'width': '100vw',
  'display': 'flex',
  'flexDirection': 'column',
});

export const SubContainer = styled.div(props => ({
  'height': '63.88vh',
  'width': '100vw',
  'backgroundColor': '#1B262C',
  'padding': '7.40vh 10.42vw',
  'display': 'flex',
  'flexDirection': 'row',
  'justifyContent': 'space-between',
  'alignItems': 'center',
  'boxShadow': props.shadow
}));

export const GaleryGrid = styled.div({
  'display': 'grid',
  'gridTemplateColumns': 'repeat(3, 1fr)',
  'gridGap': '1.56vw 2.77vh',
  'width': '42.19vw',
  'height': '49.07vh',
});
export const GridImage = styled.div(props => ({
  'backgroundImage': `url(${props.src})`,
  'backgroundSize': 'cover',
  'width': '13.02vw',
  'height': '23.14vh',
}));

export const GaleryRow = styled.div({
  'display': 'flex',
  'flexDirection': 'row',
  'justifyContent': 'space-between',
  'width': '36.04vw',
  'height': '49.07vh',
});
export const RowImage = styled.div(props => ({
  'backgroundImage': `url(${props.src})`,
  'backgroundSize': 'cover',
  'width': '15.42vw',
  'height': '45.65vh',
}));


export const Infos = styled.div({
  'height': '20.09vh',
  'width': '31.77vw'
});
export const InfoTitle = styled.h2({
  'fontFamily': 'SF Pro Text',
  'fontSize': '2.5vw',
  'lineHeight': '5.28vh',
  'fontWeight': '500',
  'color': '#F9F8FF',
  'marginBottom': '2.96vh'
});
export const InfoDescription = styled.h6({
  'fontFamily': 'SF Pro Text',
  'fontSize': '1.25vw',
  'lineHeight': '2.68vh',
  'fontWeight': '500',
  'color': 'rgba(249, 248, 255, 0.5)',
  'marginBottom': '1.48vh'
});
export const Link = styled.a({
  'fontFamily': 'SF Pro Text',
  'fontSize': '1.25vw',
  'lineHeight': '2.22vh',
  'fontWeight': '600',
  'color': '#7971E9'
});