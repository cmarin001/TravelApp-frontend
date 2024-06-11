import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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

function Carousel(props: UserProps) {
  const { locations } = props;

  return (
    <Swiper {...slideOpts}>
      {locations.map((location) => (
        <SwiperSlide key={location.place_id} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
         
            <Card 
              location={location}
              navigatePath="/explore"
            />

        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export { Carousel };
