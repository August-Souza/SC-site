import styled from 'styled-components';

export const Container = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-weight: lighter;
    font-size: 40px;
    margin: 20px 0;
  }
`;

export const Images = styled.div`
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  div {
    font-weight: bold;
    font-size: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(100vw / 3.1);
    height: calc(1000px (100% / 3));
    background-color: #fff;
    display: flex;
    transition: all 0.3s;
  }

  img {
    overflow: hidden;
    transition: all 0.3s;
    width: calc(100% / 3);
    height: calc(100% / 3);
  }

  img:hover {
    overflow: hidden;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-transform: scale(1.05);
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
  }

  div:hover {
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-transform: scale(1.05);
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
  }
`;
