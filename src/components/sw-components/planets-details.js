import React from 'react';
import ItemDetails, { Record } from '../item-details/item-details';
import { withSwapiService } from './../hoc-helpers/with-swapi-service';

const PlanetDetails = (props) => {
    return(
        <ItemDetails { ...props}>
            <Record label={'Population'}  field={'population'} />
            <Record label={'Diameter'}  field={'diameter'} />
        </ItemDetails>
    )

}

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
        getImageUrl: swapiService.getPlanetsImage
    }
}

export default withSwapiService(PlanetDetails, mapMethodsToProps);