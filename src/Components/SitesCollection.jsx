import React from 'react';
import Site from './SiteCard';
// import { Card } from 'semantic-ui-react'


const SitesCollection = props => {
    // console.log(props);
    return (
        // <Card.Group itemsPerRow={6}>
        <div>
            {props.sites.map(site => <Site key={site.id} {...site} />)}
        </div>
        // </Card.Group>
    );
}
export default SitesCollection;