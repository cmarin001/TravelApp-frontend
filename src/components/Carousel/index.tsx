import Slider from "@ant-design/react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styled from 'styled-components';
import { Card } from '../Card';

interface UserProps {
  locations: any[];
}

const slideOpts = {
  initialSlide: 0,
  speed: 400,
  slidesToShow: 1.5,
  centerMode: true,
  centerPadding: '16px',
};

const StyledSlider = styled(Slider)`
  width: 100%;
  height: 100%;
`;

const StyledSlide = styled.div`
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
    <StyledSlider {...slideOpts}>
      {locations.map((location) => (
        <StyledSlide key={location.place_id}>
          <StyledCardContainer>
            <Card location={location} />
          </StyledCardContainer>
        </StyledSlide>
      ))}
    </StyledSlider>
  );
}

export { Carousel };
