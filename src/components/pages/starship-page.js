import React from 'react';
import { StarshipsList } from './../sw-components/items-list';
import { withRouter } from 'react-router-dom';

const StarshipPage = ({history}) => {

    return (
        <StarshipsList onItemSelected={ (itemId) => history.push(itemId) } />
    )

}

export default withRouter(StarshipPage);