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
        filterBy: '',
        // filterCategory: false,
        // filterRegion: false,
        // filterCountry: false
    }
    handleSearch = (search) => {
        this.setState({ search: search })
    };

    handleCategory = (e) => {
        this.setState({ filterCategory: e.target.value });
    }
    handleRegion = (e) => {
        this.setState({ filterCategory: e.target.value });
    }
    handleChange = (e) => {
        this.setState({ filterBy: e.target.value });
    }
    //     filterItems: function(val, type) {
    //     switch (type) {
    //     case 'Search':
    //         this.setState({search: val});
    //         break;
    //     case 'category':
    //         this.setState({category: val});
    //         break;
    //     case 'region':
    //         this.setState({region: val});
    //         break;
    //     case 'country':
    //         this.setState({country: val});
    //         break;
    //     default:
    //         break;
    //     }
    // }
    render() {
        console.log(this.state.filterBy);
        let { match, sites } = this.props;
        const filteredSites = this.props.sites.filter(site => site.name.toLowerCase().includes(this.state.search.toLowerCase()));
        // const sortByCategory = this.props.sites.filter(site => site.category.name.toLowerCase().includes(this.state.filterBy.toLowerCase()))
        // const sortByRegion = this.props.sites.filter(site => site.region.name.toLowerCase().includes(this.state.filterBy.toLowerCase()))
        const sortByCountry = this.props.sites.filter(site => site.country.name.toLowerCase().includes(this.state.filterBy.toLowerCase()))
        let displaySites = this.state.search ? filteredSites : [...sortByCountry] // sortedSites  // [...this.state.sites]

            // if (this.state.search) {
            //     filteredSites;
            // }else if (this.state.filterCategory ) {
            //     sortByCategory
            // } else if (this.state.filterRegion) {
            //     sortByRegion;
            // } else if (this.state.filterCountry) {
            //     sortByCountry;
            // }

        return (
            <>
                <Search handleSearch={this.handleSearch} />
                <Filter handleChange={this.handleChange} sites={sites} />
                <div className="site-index">
                    <Switch>
                        <Route
                            exact path={`${match.path}`}
                            render={() => <> {displaySites.map(site => <SiteCard key={site.id} {...site} match={this.props.match} push={this.props.history.push} />)} </>}
                            />
                        <Route path={`${match.path}/:id`} render={routerProps => <SitePage {...routerProps} sites={sites}
                            handleChangeVisited={this.props.handleChangeVisited}
                        />} />
                    </Switch>
                </div>
            </>
        );
    }

}
export default SitesCollection;