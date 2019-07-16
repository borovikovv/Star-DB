import React from 'react';
import ItemDetails, { Record } from '../item-details/item-details';
import { withSwapiService } from './../hoc-helpers/with-swapi-service';

const StarshipDetails = (props) => {
    return(
        <ItemDetails {...props} >
            <Record label={'Model'}  field={'model'} />
            <Record label={'Length'}  field={'length'} />
            <Record label={'cost'}  field={'costInCredits'} />
        </ItemDetails>
    )
}

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getStarship,
        getImageUrl: swapiService.getStarshipsImage
    }
}

export default withSwapiService(StarshipDetails, mapMethodsToProps);