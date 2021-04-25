import { createGlobalStyle } from 'styled-components';
import px2vw from '../utils/px2vw';

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    height: -webkit-fill-available;
  }
  
  :root {
      font-size: ${px2vw(50)};

      @media (min-width: 688px) {
        font-size: ${px2vw(25)};
      }

      @media (min-width: 992px) {
        font-size: ${px2vw(15)};
      }
    }
`;

export default Global;
