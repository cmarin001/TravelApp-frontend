import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IonImg, IonLabel } from "@ionic/react";

const StyledSwiper = styled(Swiper)`
  width: 100%;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLocationItem = styled.div`
  width: 90%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  background-color: var(--item-background-color);
`;

const StyledIonImg = styled(IonImg)`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const StyledLocationDetails = styled(IonLabel)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 8px;
  text-align: center;

  h2 {
    margin: 0;
    font-size: 1rem;
  }
`;

export { StyledSwiper, StyledSwiperSlide, StyledLocationItem, StyledIonImg, StyledLocationDetails };
