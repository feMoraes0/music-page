import styled from 'styled-components';

export const Container = styled.div({
  'backgroundColor': '#293942',
  'display': 'flex',
  'flexDirection': 'row',
  'justifyContent': 'space-between',
  'alignItems': 'center',
  'padding': '3.05vh 10vw',
});

export const List = styled.ul({
  'margin': '0',
});

export const ListItem = styled.li({
  'display': 'inline',
  'fontFamily': 'SF Pro Text',
  'fontSize': '1.25vw',
  'color': '#FFFFFF',
  'fontWeight': '500',
  'marginRight': '50px',
  '&:last-child': {
    'marginRight': '0px',
  }
});

export const ListButton = styled.button(props => ({
  'backgroundColor': props.active ? '#7971E9' : 'transparent',
  'color': props.active ? '#F4EEFF' : '#7971E9',
  'fontFamily': 'SF Pro Text',
  'fontSize': '1.12vw',
  'lineHeight': '24px',
  'fontWeight': '500',
  'padding': '1.39vh 0.78vw',
  'borderRadius': '4px',
  'marginRight': '24px',
  'width': '158px',
  'border': '1px solid #7971E9',
  'textTransform': 'capitalize'
}));
