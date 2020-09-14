import styled from 'styled-components';

export const Title = styled.h1`
  margin: 30px;
  display: flex;
  justify-self: center;
  align-self: center;
`;

export const Divisor = styled.hr`
  margin: 0 30px;
`;

export const Container = styled.div`
  @keyframes move {
    0% {
      transform: translate3d(0px, 0px, 0px);
      transform-origin: right left;
    }
    100% {
      transform: translate3d(-50%, 0px, 0px);
    }
  }

  overflow: hidden;
  margin-top: 1rem;

  .colab-slider {
    overflow: hidden;
    white-space: nowrap;

    .colab-slider-content {
      display: inline-block;
      white-space: nowrap;
      overflow: hidden;
      animation: move 100s infinite linear;

      .colab-caps {
        display: inline-block;

        .colab-logo {
          white-space: nowrap;
          overflow: hidden;
          img {
            display: inline-block;
            vertical-align: middle;
            opacity: 0.5;
            cursor: default;
            padding: 0px 2.2rem;
            outline: none;
            transition: opacity 0.2s ease 0s;
          }
        }
      }
    }
  }
`;
