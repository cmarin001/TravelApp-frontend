
import { LocationContainer, LocationIcon, LocationName, DropdownIcon } from './styles';
import { locationSharp, chevronDownOutline } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';

interface LocationDisplayProps {
  location: string;
}

function LocationDisplay(props: LocationDisplayProps) {
  const {location}  = props; 
  return (
    <LocationContainer>
      <LocationIcon icon={locationSharp} />
      <LocationName>{location}</LocationName>
      <DropdownIcon icon={chevronDownOutline} />
    </LocationContainer>
  );
};

export {LocationDisplay} ;