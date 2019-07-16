import React from 'react';
import ItemDetails, { Record } from '../item-details/item-details';
import { withSwapiService } from './../hoc-helpers/with-swapi-service';

const PersonDetails  = (props) => {
    return(
        <ItemDetails className="person-details" {...props }>
            <Record label={'Gender'}  field={'gender'} />
            <Record label={'BirthYear'}  field={'birthYear'} />
        </ItemDetails>
    )
}

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImage
    }
}

export default withSwapiService(PersonDetails, mapMethodsToProps);
