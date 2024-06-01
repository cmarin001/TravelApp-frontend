import React from "react";
import {
  StyledContainerTitle,
  StyledIonTextLarge,
  StyledIonTextSmall,
} from "./styles.js";

interface UserProps {
  name: string;
}

function Carousel(props: UserProps) {
  const { name } = props;
  return (
    <StyledContainerTitle>
      <StyledIonTextSmall color="medium">
        <h1>Welcome back,</h1>
      </StyledIonTextSmall>
      <StyledIonTextLarge color="medium">
        <h1>{name}</h1>
      </StyledIonTextLarge>
    </StyledContainerTitle>
  );
}

export { Carousel };
