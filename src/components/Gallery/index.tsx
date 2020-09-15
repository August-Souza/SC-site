import React from 'react';

import { Container, Images } from './styles';

import image from '../../img/someimage.jpg';

const Gallery: React.FC = () => {
  return (
    <Container>
      <h1>Gallery</h1>
      <Images>
        <img src={image} alt="img1" />
        <img src={image} alt="img2" />
        <img src={image} alt="img3" />
        <img src={image} alt="img4" />
        <img src={image} alt="img5" />
        <div>Mais Fotos...</div>
      </Images>
    </Container>
  );
};

export default Gallery;
