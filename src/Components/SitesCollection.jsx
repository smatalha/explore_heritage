import React from 'react';
import SiteCard from './SiteCard';
import SitePage from './SitePage';
import { Route, Switch } from "react-router-dom";
import Search from './Search';
import Filter from './Filter';
// import { Card } from 'semantic-ui-react'


class SitesCollection extends React.Component {
    state = {
        search: '',
        filterBy: ''
    }
    handleSearch = (search) => {
        this.setState({ search: search })
    };

    handleChange = e => {
        this.setState({ filterBy: e.target.value})
    }
    
    render() {
        // console.log(this.state);
        let { match, sites } = this.props;
        const filteredSites = this.props.sites.filter(site => site.name.toLowerCase().includes(this.state.search.toLowerCase()))
        const sortByCategory = this.props.sites.filter(site => site.category.name.toLowerCase().includes(this.state.filterBy.toLowerCase()))
        const sortByRegion = this.props.sites.filter(site => site.region.name.toLowerCase().includes(this.state.filterBy.toLowerCase()))
        const sortByCountry = this.props.sites.filter(site => site.country.name.toLowerCase().includes(this.state.filterBy.toLowerCase()))
        let displaySites = this.state.search ? filteredSites : [...sortByCategory] // sortedSites  // [...this.state.sites]

        // let displaySites = () => {
            if ( this.state.filterBy === 'category' ) {
                displaySites = sortByCategory
            } else if (this.state.filterBy === 'region') {
                displaySites = sortByRegion
            } else if (this.state.filterBy === 'country') {
                displaySites = sortByCountry
            }
        // }
        // console.log(this.props.sites);

        return (
            <>
                <Search handleSearch={this.handleSearch} />
                <Filter handleChange={this.handleChange} {...sites} />
                <div className="site-index">
                    <Switch>
                        <Route
                            exact path={`${match.path}`}
                            render={() => <> {displaySites.map(site => <SiteCard key={site.id} {...site} match={this.props.match} push={this.props.history.push} />)} </>}
                            />
                        <Route path={`${match.path}/:id`} render={routerProps => <SitePage {...routerProps} sites={sites}
                            handleChangeVisited={this.handleChangeVisited}
                            handleVisited={this.handleVisited}
                        />} />
                    </Switch>
                </div>
            </>
        );
    }

}
export default SitesCollection;