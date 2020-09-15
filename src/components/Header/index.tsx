import React from 'react';

import imgLive from '../../assets/imgLogoR.png';

import { Container, Bar } from './styles';

const Header: React.FC = () => {
  return (
    <>
      <Container>
        <img src={imgLive} alt="poi" />
      </Container>
      <Bar>
        <ul>
          <li>
            <a href="http://localhost:3000/loja">Loja</a>
          </li>
          <a href="http://localhost:3000/">
            <img src={imgLive} alt="SantosCharme" title="SantosCharme" />
          </a>
          <li>
            <a href="http://localhost:3000/sobre">Sobre</a>
          </li>
        </ul>
      </Bar>
    </>
  );
};

export default Header;
