import styled from 'styled-components';
import { IonIcon } from '@ionic/react';

const LocationContainer = styled.div`
  display: flex;
  align-items: center;
`;

 const LocationIcon = styled(IonIcon)`
  color: #007aff;
  margin-right: 8px;
`;

 const LocationName = styled.span`
  font-size: 16px;
  color: #333;
`;

 const DropdownIcon = styled(IonIcon)`
  color: #333;
  margin-left: 8px;
`;

export { LocationContainer, LocationIcon, LocationName, DropdownIcon };