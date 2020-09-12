import React from 'react';
import {
  TiMediaPlayOutline,
  TiMediaPauseOutline,
  TiMediaRewindOutline,
  TiMediaFastForwardOutline,
} from 'react-icons/ti';

import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaTwitch,
} from 'react-icons/fa';

import { Container, PlayTrack, SocialMedias } from './styles';

const Player: React.FC = () => {
  return (
    <Container>
      <PlayTrack>
        <TiMediaPauseOutline />
        <TiMediaPlayOutline />
        <TiMediaRewindOutline />
        <TiMediaFastForwardOutline />
        <p>Music: Musica</p>
      </PlayTrack>
      <SocialMedias>
        <FaTwitter />
        <FaFacebookF />
        <FaInstagram />
        <FaWhatsapp />
        <FaYoutube />
        <FaTwitch />
      </SocialMedias>
    </Container>
  );
};

export default Player;
