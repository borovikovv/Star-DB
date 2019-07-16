import React from 'react';
import ItemList from './../item-list/item-list';
import { withData } from './../hoc-helpers/withData';
import { withSwapiService } from './../hoc-helpers/with-swapi-service';


const withChildFunction = (Wrapper, fn) => {
    return (props) => {
        return (
            <Wrapper {...props}>
                { fn }
            </Wrapper>
        )
    }
}
const renderName = ({name}) => <span>{name}</span>;

const mapMethodsPersonToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    }
}

const mapMethodsPlanetsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    }
}

const mapMethodsStarshipsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    }
}


const PersonList = withSwapiService(withData(withChildFunction(ItemList, renderName)), mapMethodsPersonToProps);
const PlanetsList = withSwapiService(withData(withChildFunction(ItemList, renderName)), mapMethodsPlanetsToProps);
const StarshipsList = withSwapiService(withData(withChildFunction(ItemList, renderName)), mapMethodsStarshipsToProps);

export {
    PersonList,
    PlanetsList,
    StarshipsList
};