import React from 'react';
import Player from '../../components/Player';
import Sponsors from '../../components/Sponsors';
import Footer from '../../components/Footer';
import Gallery from '../../components/Gallery';

import imgLive from '../../assets/imgLogoR.png';

import { Container, Live, Image } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Player />
      <Container>
        <Image>
          <img className="oi" src={imgLive} alt="poi" />
        </Image>
        <Live>
          <div>
            <h2>Santos Charme Lives</h2>
            <p>
              Todos os domingos a partir das 20 horas LIVE! Santos Charme!!!
            </p>
          </div>
          <img src={imgLive} alt="liveimg" />
        </Live>
        <Gallery />
        <Sponsors />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
