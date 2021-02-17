import React from 'react'

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
            <select id="sites-select" value={props.filterBy} onChange={props.handleChange}>
                <optgroup label="Category" >
                    <option value="">None</option>
                        {optionsCategory}
                </optgroup>
                <optgroup label="Region">
                        {optionsRegion}
                </optgroup>
                <optgroup label='Country'>
                        {optionsCountry}
                </optgroup>
            </select> */}
            <label>
                Filter By Category:
                    <select value={props.sortBy} onChange={props.handleChange}>
                    <option value="">None</option>
                        {optionsCategory}
                </select>
            </label>
            <label>
                Filter By Region:
                    <select value={props.sortBy} onChange={props.handleChange}>
                    <option value="">None</option>
                        {optionsRegion}
                </select>
            </label>
            <label>
                Filter By Country:
                    <select value={props.sortBy} onChange={props.handleChange}>
                    <option value="">None</option>
                        {optionsCountry}
                </select>
            </label>
        </div>
    )
}

export default Filter