import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Live = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 30px;
  width: 100%;
  height: 400px;
  background-color: #363633;

  div {
    h2 {
      color: #fff;
      font-size: 50px;
      font-weight: bold;
    }

    p {
      margin-top: 20px;
      color: #f6f9f6;
      font-weight: lighter;
    }
  }

  img {
    width: 25%;
    height: 35%;
  }
`;

export const Sponsors = styled.div``;
