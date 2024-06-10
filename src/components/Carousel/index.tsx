import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import styled from 'styled-components';
import { Card } from '../Card';

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

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const StyledCardContainer = styled.div`
  width: -webkit-fill-available;
  width: -moz-available;
`;

function Carousel(props: UserProps) {
  const { locations } = props;

  return (
    <StyledSwiper {...slideOpts} modules={[Pagination]} pagination={{ clickable: true }}>
      {locations.map((location) => (
        <StyledSwiperSlide key={location.place_id}>
          <StyledCardContainer>
            <Card location={location} />
          </StyledCardContainer>
        </StyledSwiperSlide>
      ))}
    </StyledSwiper>
  );
}

export { Carousel };
