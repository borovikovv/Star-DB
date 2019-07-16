import React, { Component } from 'react';
import './app.css';
import Header from './../header/header';
import StarshipDetails from './../sw-components/starships-details';
import PeoplePage from './../pages/people-page';
import PlanetPage from './../pages/planet-page';
import StarshipPage from './../pages/starship-page';
import RandomPlanets from './../random-planets/random-planets';
import SwapiService from './../../service/service';
import { SwapiServiceProvider } from './../swapi-service-context/swapi-service-context';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


export default class App extends Component {

    swapiService = new SwapiService();

    render() {

        return(
            <div>
                <SwapiServiceProvider value={this.swapiService}>
                    <Router>
                        <Header />
                        <RandomPlanets />
                        <Switch>
                            <Route path='/' render={ () => <h2 className="welcome">Welcome to StarDB </h2>}
                                    exact />
                            <Route path='/people/:id?' component={PeoplePage} />
                            <Route path='/planets' component={PlanetPage} />
                            <Route path='/starships' exact component={StarshipPage} />
                            <Route path='/starships/:id' render={ ({match}) => { 
                                const { id } = match.params;
                            return <StarshipDetails itemId={id} />
                            }} />
                            <Route render={()=> <h2> Page not found </h2> } />
                        </Switch>
                    </Router>
                </SwapiServiceProvider>
            </div>
        )
    }
}