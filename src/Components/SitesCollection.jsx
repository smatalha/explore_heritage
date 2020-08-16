import React from 'react';
import SiteCard from './SiteCard';
import SitePage from './SitePage';
import { Route, Switch } from "react-router-dom";
import Search from './Search';
import Filter from './Filter';
// import Profile from './Profile';
// import { Card } from 'semantic-ui-react'


class SitesCollection extends React.Component {
    state = {
        search: '',
        filterBy: '',
    }
    handleSearch = search => {
        this.setState({ search: search })
    };

    handleCategory = e => {
        this.setState({ filterCategory: e.target.value });
    }
    handleRegion = e => {
        this.setState({ filterRegion: e.target.value });
    }
    handleCountry = e => {
        this.setState({ filterCountry: e.target.value });
    }
    render() {
        // console.log(this.state);
        let { match, sites } = this.props;
        const filteredSites = () => {
            if (this.props.sites) {
                return this.props.sites.filter(site => site.name.toLowerCase().includes(this.state.search.toLowerCase()))
            } else {
                return null
            }
        }
        const sortBy = () => {
            if (this.state.filterCountry && this.state.filterCategory && this.state.filterRegion) {
                return this.props.sites.filter(site =>
                    site.country.name.toLowerCase().includes(this.state.filterCountry.toLowerCase()) &&
                    site.category.name.toLowerCase().includes(this.state.filterCategory.toLowerCase()) &&
                    site.region.name.toLowerCase().includes(this.state.filterRegion.toLowerCase())
                )
            } else if (this.state.filterCountry && this.state.filterCategory){
                return this.props.sites.filter(site =>
                    site.country.name.toLowerCase().includes(this.state.filterCountry.toLowerCase()) &&
                    site.category.name.toLowerCase().includes(this.state.filterCategory.toLowerCase())
                )
            } else if (this.state.filterCountry) {
                return this.props.sites.filter(site =>
                    site.country.name.toLowerCase().includes(this.state.filterCountry.toLowerCase())
                )
            } else if (this.state.filterCategory) {
                return this.props.sites.filter(site =>
                    site.category.name.toLowerCase().includes(this.state.filterCategory.toLowerCase())
                )
            } else if (this.state.filterRegion) {
                return this.props.sites.filter(site =>
                    site.region.name.toLowerCase().includes(this.state.filterRegion.toLowerCase())
                )
            }else {
                return this.props.sites
            }
        }
        let displaySites = this.state.search ? filteredSites() : [...sortBy()] // sortedSites  // [...this.state.sites]
        return (
            <>
                <Search handleSearch={this.handleSearch} />
                <Filter
                    handleCategory={this.handleCategory}
                    handleCountry={this.handleCountry}
                    handleRegion={this.handleRegion}
                    sites={sites}
                    />
                <div className="site-index">
                    <Switch>
                        <Route
                            exact path={`${match.path}`}
                            render={() => <> {
                                displaySites.map(site => <SiteCard key={site.id} {...site} match={this.props.match} push={this.props.history.push} />)}
                                </>
                            }
                            />
                        <Route
                            path={`${match.path}/:id`} render={routerProps => <SitePage {...routerProps} sites={sites}
                            handleChangeVisited={this.props.handleChangeVisited}/>
                            // <Route path={`${match.path}/:id`} render={routerProps => <Profile {...routerProps} sites={sites} /> }
                        } />
                    </Switch>
                </div>
            </>
        );
    }
    
}
export default SitesCollection;
// const filteredSites = this.props.sites.filter(site => site.name.toLowerCase().includes(this.state.search.toLowerCase()));
// const sortByCategory = this.props.sites.filter(site => site.category.name.toLowerCase().includes(this.state.filterBy.toLowerCase()))
// const sortByRegion = this.props.sites.filter(site => site.region.name.toLowerCase().includes(this.state.filterBy.toLowerCase()))
// const sortByCountry = this.props.sites.filter(site => site.country.name.toLowerCase().includes(this.state.filterBy.toLowerCase()))
                            // const sortByCountry = () => {
                            //     if (this.props.sites) {
                            //         return this.props.sites.filter(site => site.country.name.toLowerCase().includes(this.state.filterBy.toLowerCase()))
                            //     } else {
                            //         return null
                            //     }
                            // }