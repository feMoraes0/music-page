import styled from 'styled-components';

export const Container = styled.div({
  'backgroundColor': '#293942',
  'display': 'flex',
  'flexDirection': 'row',
  'justifyContent': 'space-between',
  'alignItems': 'center',
  'padding': '0px 10vw',
  'height': '11.1vh',
  'width': '100vw'
});

export const Logo = styled.img({
  'width': '12.29vw',
});

export const List = styled.ul({
  'margin': '0',
});

export const ListItem = styled.li({
  'display': 'inline',
  'fontFamily': 'SF Pro Text',
  'fontSize': '24px',
  'verticalAlign': 'middle',
  'letterSpacing': '0.218182px',
  'lineHeight': '29px',
  'color': '#FFFFFF',
  'fontWeight': '500',
  'marginRight': '2.60vw',
  '&:last-child': {
    'marginRight': '0px',
  }
});

export const ListButton = styled.button(props => ({
  'backgroundColor': props.active ? '#7971E9' : 'transparent',
  'color': props.active ? '#F4EEFF' : '#7971E9',
  'fontFamily': 'SF Pro Text',
  'fontSize': '20px',
  'lineHeight': '24px',
  'verticalAlign': 'middle',
  'fontWeight': '500',
  'padding': '1.39vh 0.78vw',
  'borderRadius': '4px',
  'marginRight': '1.25vw',
  'width': '8.23vw',
  'border': '1px solid #7971E9',
  'textTransform': 'capitalize',
  '&:last-child': {
    'marginRight': '0px',
  }
}));
