import 'swiper/css';
import 'swiper/css/pagination';
import { StyledCardContainer, StyledSwiperSlide, StyledSwiper } from "./styles";
import { Card } from "../Card";

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
    <StyledSwiper {...slideOpts}>
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
