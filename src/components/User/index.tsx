import {
  StyledContainerTitle,
  StyledIonTextLarge,
  StyledIonTextSmall,
} from "./styles";

interface UserProps {
  name: string;
}

function User(props: UserProps) {
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

export { User };
