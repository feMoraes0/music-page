import styled from 'styled-components';

export const DividerContainer = styled.div({
  'width': '100vw',
  'height': '16.67vh',
  'backgroundColor': '#293942',
  'display': 'flex',
  'flex-direction': 'row',
  'justifyContent': 'space-between',
  'alignItems': 'center',
  'padding': '6.85vh 11.61vw'
});

export const Image = styled.div(props => ({
  'backgroundImage': `url(${props.src})`,
  'backgroundRepeat': 'no-repeat',
  'backgroundSize': 'contain',
  'width': props.width,
  'height': props.height,
}));