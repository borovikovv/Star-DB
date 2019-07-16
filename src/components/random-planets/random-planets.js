import React, { Component } from 'react';
import './random-planets.css';
import Spinner from './../spinner/spinner';
import ErrorMessage from './../error-message/error-mesage';
import SwapiService from './../../service/service';

export default class RandomPlanets extends Component {

    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: false
    }

    onLoadedPlanet = (planet) => {
        this.setState({
            planet,
            loading: false,
            err: false
        });
    }

    onError = (err) => {
        this.setState({
            err: true,
            loading: false
        });
    }

    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 10000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 9) + 2;
        this.swapiService
            .getPlanet(id)
            .then(this.onLoadedPlanet)
            .catch(this.onError);
    }

    render() {

        const { planet,
        loading, err } = this.state;

        const hasData = !(err || loading);
        const errorNotice = err ? <ErrorMessage /> : null;
        const content = hasData ? <PlanetView planet={planet} /> : null;
        const spinner = loading ? <Spinner /> : null;


        return(
            <div className="random-planet card">
                { errorNotice }
                {   content }
                {   spinner }
            </div>
        )
    }
}

const PlanetView = ({planet}) => {

    const { id, name, population, rotationPeriod, diameter} = planet;

    return(
        <React.Fragment>
            <img className="random-planet-image"
            src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
            alt="image planet"/>
    
            <div className="card-body">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )

}
