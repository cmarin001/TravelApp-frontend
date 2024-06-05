import 'swiper/css';
import 'swiper/css/pagination';
import { StyledSwiper, StyledSwiperSlide, StyledLocationItem, StyledIonImg, StyledLocationDetails } from './styles';

interface UserProps {
  locations: any[];
}

const simplifyLocationName = (name: string) => {
  const parts = name.split(',');
  if (parts.length >= 3) {
    return `${parts[0]}, ${parts[2].trim().split(' ')[0]}`;
  }
  return name;
};

const slideOpts = {
  initialSlide: 0,
  speed: 400,
  slidesPerView: 1.5,
  centeredSlides: true,
  spaceBetween: 16
};

function Carousel({ locations }: UserProps) {
  return (
    <StyledSwiper {...slideOpts}>
      {locations.map((location) => (
        <StyledSwiperSlide key={location.place_id}>
          <StyledLocationItem>
            <StyledIonImg src={location.image_url || 'https://via.placeholder.com/150'} alt={location.display_name} />
            <StyledLocationDetails>
              <h2>{simplifyLocationName(location.display_name)}</h2>
            </StyledLocationDetails>
          </StyledLocationItem>
        </StyledSwiperSlide>
      ))}
    </StyledSwiper>
  );
}

export { Carousel };
