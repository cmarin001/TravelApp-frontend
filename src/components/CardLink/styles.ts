import { IonGrid } from "@ionic/react";
import styled from "styled-components";

const StyledLocationCardLink = styled.div<{ $backgroundurl: string }>`
  width: 90%;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  background-color: var(--item-background-color);
  margin: 8px;
  background-image: url(${(props: { $backgroundurl: string }) =>
    props.$backgroundurl});
  height: 12rem;
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;
`;

const StyledRating = styled.div`
  color: #f8d675;
`;

const FavoriteIcon = styled.div`
  position: absolute;
  bottom: 8px;
  right: 8px;
  ion-icon {
    color: #f8d675;
    margin-right: 4px;
    font-size: 1rem;
  }
`;

const StyledDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 59px;
  padding: 12px 4px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  width: fit-content;
  max-width: 300px;
  max-height: 32px;
  position: relative;
  top: -70px;
`;

const StyledFavorite = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 80%;
  background-color: white;
  position: relative;
  top: -70px;
  height: 32px;
  width: 32px;
  ion-icon {
    color: #ec5655;
  }
`;

const StyledGrid = styled(IonGrid)`
  top: 169px;
  position: relative;
`;

const StyledCardLinkContainer = styled.div`
  width: 100%;
`;

export {
  StyledCardLinkContainer,
  StyledLocationCardLink,
  StyledGrid,
  StyledDetails,
  StyledRating,
  StyledFavorite,
  FavoriteIcon,
};
