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
        <a href="https://twitter.com/SantosCharme">
          <FaTwitter />
        </a>
        <a href="https://www.facebook.com/santoscharme2018/">
          <FaFacebookF />
        </a>

        <a href="https://www.instagram.com/santoscharme013/">
          <FaInstagram />
        </a>
        <a href="https://chat.whatsapp.com/KBhL4RusSbrHbx2qUxaOM7">
          <FaWhatsapp />
        </a>
        <a href="https://www.youtube.com/channel/UCSGjpyG3PI_NIx1kWT8mYdQ">
          <FaYoutube />
        </a>
        <a href="https://www.twitch.tv/santoscharme">
          <FaTwitch />
        </a>
      </SocialMedias>
    </Container>
  );
};

export default Player;
