export default class SwapiService {

    _apiBase = 'https://swapi.co/api';
    _imageBase = 'https://starwars-visualguide.com/assets/img';

    getResourses = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
    
        if(!res.ok){
            throw new Error(`Could not fetch ${url}` +
            `available ${res.status}`);
        }
    
        return await res.json();
    }

    getAllPeople = async () => {
        const res = await this.getResourses(`/people/`);
        return res.results.map(this._transformPerson);
    }
    
    getPerson = async (id) => {
        const person = await this.getResourses(`/people/${id}/`);
        return this._transformPerson(person);
    }

    getAllPlanets = async () => {
        const res = await this.getResourses(`/planets/`);
        return res.results.map(this._transformPlanet);
    }
    
    getPlanet = async (id) => {
        const planet = await this.getResourses(`/planets/${id}/`);
        return this._transformPlanet(planet);
    }

    getAllStarships = async () => {
        const res = await this.getResourses(`/starships/`);
        return res.results.map(this._transformStarship);
    }
    
    getStarship = async (id) => {
        const starship = await this.getResourses(`/starships/${id}/`);
        return this._transformStarship(starship);
    }

    getPersonImage = ({id}) => {
        return `${this._imageBase}/characters/${id}.jpg`
    }

    getPlanetsImage = ({id}) => {
        return `${this._imageBase}/planets/${id}.jpg`
    }

    getStarshipsImage = ({id}) => {
        return `${this._imageBase}/starships/${id}.jpg`
    }

    _extractId = (item) => {
        const idRegEx = /\/([0-9]*)\/$/;
        return  item.url.match(idRegEx)[1];
    }

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }

    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity
        }
    }

    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    }
}
