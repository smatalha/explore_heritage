import React from 'react'
// import { Dropdown } from 'semantic-ui-react'

const Filter = props => {
    // console.log(props.sites)
    const countryNames = props.sites.map(site => site.country.name)
    const uniqueCountry = [...new Set(countryNames)]
    const optionsCountry = uniqueCountry.map(name => {
        return <option value={name} key={name}>{name}</option>;
    })

    const categoryNames = props.sites.map(site => site.category.name)
    const uniqueCategory = [...new Set(categoryNames)];
    const optionsCategory = uniqueCategory.map(name => {
        return <option value={name} key={name}>{name}</option>;
    })

    const regionNames = props.sites.map(site => site.region.name)
    const uniqueRegion = [...new Set(regionNames)]
    const optionsRegion = uniqueRegion.map(name => {
        return <option value={name} key={name}>{name}</option>;
    })
    return (
        <div className='filter'>
            {/* <label for="sites-select">Choose a Heritage Site:</label>
            <select id="sites-select" >
                <optgroup label="Category" value={props.sortBy} onChange={props.handleCategory}>
                    <option value="">None</option>
                        {optionsCategory}
                </optgroup>
                <optgroup label="Region" value={props.sortBy} onChange={props.handleRegion}>
                        {optionsRegion}
                </optgroup>
                <optgroup label='Country' value={props.sortBy} onChange={props.handleCountry}>
                        {optionsCountry}
                </optgroup>
            </select> */}

            <label>
                Search By:
            <label>
                <select  onChange={props.handleRegion}>
                    <option value="">Region</option>
                        {optionsRegion}
                </select>
            </label>
                    <select value={props.sortBy} onChange={props.handleCategory}>
                    <option value="">Category</option>
                        {optionsCategory}
                </select>
            </label>
            <label>
                <select value={props.sortBy} onChange={props.handleCountry}>
                    <option value="">Country</option>
                        {optionsCountry}
                </select>
            </label>
        </div>
    )
}

export default Filter