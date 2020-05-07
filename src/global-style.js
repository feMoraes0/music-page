import { createGlobalStyle } from 'styled-components';
import SFProText from './assets/fonts/SF-Pro-Text-Regular.otf';

export default createGlobalStyle`
  @font-face {
    font-family: 'SF Pro Text',
    src: local('SF Pro Text'), local('SFProText'),
    url(${SFProText}) format('otf'),
  }
`;