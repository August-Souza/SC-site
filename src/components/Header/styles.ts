import styled from 'styled-components';

import imgh from '../../assets/imgHeaderF.png';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 100px);
  background: url(${imgh}) no-repeat center;
  img {
    width: calc(100vw - 50%);
  }
`;

export const Bar = styled.div`
  height: 50px;

  ul {
    display: flex;
    justify-content: space-evenly;
    list-style: none;
  }

  img {
    width: 130px;
  }
`;
