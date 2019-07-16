import React, { Component } from 'react';
import Row from './../row/row';
import PlanetDetails from './../sw-components/planets-details';
import { PlanetsList } from './../sw-components/items-list';

export default class PlanetPage extends Component {

    state = {
        selectedPlanet: null
    }

    onItemSelected = (itemId) => {
        this.setState({selectedPlanet: itemId});
    }

    render() {
        return (
            <Row 
                left={ <PlanetsList onItemSelected={ this.onItemSelected } /> } 
                right={ <PlanetDetails itemId={ this.state.selectedPlanet}/> } />
        )
    }
}