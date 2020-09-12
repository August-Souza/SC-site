import React from 'react';
import Player from '../../components/Player';

import { Container, Content } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Player />
      <Container>
        <Content />
      </Container>
    </>
  );
};

export default Home;
