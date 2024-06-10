import React, { Suspense, lazy } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { StyledCardContainer, StyledSwiperSlide, StyledSwiper } from "./styles";
import { Card } from "../Card";

const Swiper = lazy(() => import('swiper/react').then(mod => ({ default: mod.Swiper })));
const SwiperSlide = lazy(() => import('swiper/react').then(mod => ({ default: mod.SwiperSlide })));

interface UserProps {
  locations: any[];
}

const slideOpts = {
  initialSlide: 0,
  speed: 400,
  slidesPerView: 1.5,
  centeredSlides: true,
  spaceBetween: 16,
};

function Carousel(props: UserProps) {
  const { locations } = props;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <StyledSwiper {...slideOpts}>
        {locations.map((location) => (
          <StyledSwiperSlide key={location.place_id}>
            <StyledCardContainer>
              <Card location={location} />
            </StyledCardContainer>
          </StyledSwiperSlide>
        ))}
      </StyledSwiper>
    </Suspense>
  );
}

export { Carousel };
