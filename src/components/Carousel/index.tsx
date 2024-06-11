import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Card } from "../Card";
import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";

interface UserProps {
  locations: any[];
}

function Carousel(props: UserProps) {
  const { locations } = props;
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeLocation, setActiveLocation] = useState(locations[0]);

  return (
    <Swiper
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      onSlideChange={({ activeIndex }) => {
        setActiveLocation(locations[activeIndex]);
      }}
      initialSlide={0}
      speed={400}
      slidesPerView={1.5}
      centeredSlides={true}
      spaceBetween={16}
    >
      {locations.map((location) => (
        <SwiperSlide
          key={location.place_id}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <Card location={location} navigatePath="/explore" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export { Carousel };
