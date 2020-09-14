import React from 'react';
import Player from '../../components/Player';
import Sponsors from '../../components/Sponsors';
import Footer from '../../components/Footer';

import imgLive from '../../assets/imgLogoR.png';

import { Container, Live } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Player />
      <Container>
        <Live>
          <div>
            <h2>Santos Charme Lives</h2>
            <p>
              Todos os domingos a partir das 20 horas LIVE! Santos Charme!!!
            </p>
          </div>
          <img src={imgLive} alt="liveimg" />
        </Live>
        <Sponsors />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
