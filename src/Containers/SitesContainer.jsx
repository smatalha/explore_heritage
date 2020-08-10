import React from 'react';
import SitesCollection from '../Components/SitesCollection';
class SitesContainer extends React.Component {
    state = { sites: [] }

    componentDidMount () {
        fetch('http://localhost:3000/sites')
        .then(res => res.json())
        .then(sites => {
            this.setState({ sites })
        })
    }
    render() {
        // console.log(this.state);
        return (
            <div>
                <SitesCollection sites={this.state.sites}/>
            </div>
         );
    }
}

export default SitesContainer;