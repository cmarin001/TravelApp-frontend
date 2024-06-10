import styled from "styled-components";

const StyledLocationItem = styled.div`
  width: 90%;
  max-width: 300px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  background-color: var(--item-background-color);
`;

const StyledIonImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const StyledLocationDetails = styled.div`
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

const StyledCardContainer = styled.div`
  width: -webkit-fill-available;
  width: -moz-available;
`;

export {
  StyledLocationItem,
  StyledIonImg,
  StyledLocationDetails,
  StyledCardContainer,
};
