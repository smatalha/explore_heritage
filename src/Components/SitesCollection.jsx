import React from 'react';
import SiteCard from './SiteCard';
import SitePage from './SitePage';
import { Route, Switch } from "react-router-dom";
import Search from './Search';
// import { Card } from 'semantic-ui-react'


const SitesCollection = props => {
    // console.log(props);
    let { match, sites } = props;

    return (
        <>
        <Search/>
        <div className="site-index">
            <Switch>
                <Route
                    exact path={`${match.path}`}
                    render={() => <> {sites.map(site => <SiteCard key={site.id} {...site} match={props.match} push={props.history.push} />)} </>}
                    />
                <Route path={`${match.path}/:id`} render={routerProps => <SitePage {...routerProps} sites={sites} />} />
            </Switch>
        </div>
        </>
    );
}
export default SitesCollection;
// <div>
//     {props.sites.map(site => <SiteCard key={site.id} {...site} />)}
// </div>