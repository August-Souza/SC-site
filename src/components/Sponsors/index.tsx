import React from 'react';

import litoralLogo from '../../assets/colab/litoralLogo.png';

import { Container, Title, Divisor } from './styles';

const Sponsors: React.FC = () => {
  return (
    <>
      <Title>Patrocinadores</Title>
      <Divisor />
      <Container>
        <div className="colab-slider">
          <div className="colab-slider-content">
            <div className="colab-caps">
              <div className="colab-logo">
                <img src={litoralLogo} alt="LitoralBarros" title="Litoral" />
                <img src={litoralLogo} alt="LitoralBarros" title="Litoral" />
                <img src={litoralLogo} alt="LitoralBarros" title="Litoral" />
                <img src={litoralLogo} alt="LitoralBarros" title="Litoral" />
                <img src={litoralLogo} alt="LitoralBarros" title="Litoral" />
                <img src={litoralLogo} alt="LitoralBarros" title="Litoral" />
                <img src={litoralLogo} alt="LitoralBarros" title="Litoral" />
                <img src={litoralLogo} alt="LitoralBarros" title="Litoral" />
                <img src={litoralLogo} alt="LitoralBarros" title="Litoral" />
                <img src={litoralLogo} alt="LitoralBarros" title="Litoral" />
              </div>
            </div>
            <div className="colab-caps">
              <div className="colab-logo">
                <img src={litoralLogo} alt="LitoralBarros" title="Litoral" />
                <img src={litoralLogo} alt="LitoralBarros" title="Litoral" />
                <img src={litoralLogo} alt="LitoralBarros" title="Litoral" />
                <img src={litoralLogo} alt="LitoralBarros" title="Litoral" />
                <img src={litoralLogo} alt="LitoralBarros" title="Litoral" />
                <img src={litoralLogo} alt="LitoralBarros" title="Litoral" />
                <img src={litoralLogo} alt="LitoralBarros" title="Litoral" />
                <img src={litoralLogo} alt="LitoralBarros" title="Litoral" />
                <img src={litoralLogo} alt="LitoralBarros" title="Litoral" />
                <img src={litoralLogo} alt="LitoralBarros" title="Litoral" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Divisor />
    </>
  );
};

export default Sponsors;
