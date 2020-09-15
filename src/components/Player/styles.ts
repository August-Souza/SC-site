import styled from 'styled-components';

export const Container = styled.div`
  overflow: hidden;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  box-shadow: 0px 0px 15px -10px #212121;
  background-color: #f9f9f9;
`;

export const PlayTrack = styled.div`
  margin-left: 80px;
  display: flex;
  align-items: center;

  svg {
    & + svg {
      margin-left: 20px;
    }
    width: 20px;
    height: 20px;
  }

  p {
    margin-left: 60px;
    font-size: 15px;
  }
`;

export const SocialMedias = styled.div`
  margin-right: 80px;

  a {
    & + a {
      margin-left: 20px;
    }
    svg {
      color: #000;
      width: 25px;
      height: 25px;
    }
  }
`;
