import "swiper/css";
import "swiper/css/pagination";
import { StyledCardContainer, StyledSwiper, StyledSwiperSlide } from "./styles";
import { Card } from "../Card";

interface UserProps {
  locations: any[];
}

const simplifyLocationName = (name: string) => {
  const parts = name.split(",");
  if (parts.length >= 3) {
    return `${parts[0]}, ${parts[2].trim().split(" ")[0]}`;
  }
  return name;
};

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
