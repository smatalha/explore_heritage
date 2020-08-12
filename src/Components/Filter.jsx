import React from 'react'

const Filter = props => {
    // console.log(props);
    // const { name, country, category} = props
    return (
        <div className='filter'>
            <label for="sites-select">Choose a Heritage Site:</label>
            <select id="sites-select" value={props.sortBy} onChange={props.handleChange}>
                <optgroup label="Category" >
                    <option value="">None</option>
                    {/* {sites.filter(c => (
                        <option key={c.id}value={c.category.name}>{c.category}</option>
                        ))} */}
                    <option value="cultural">Cultural</option>
                    <option value="natural">Natural</option>
                    <option value="mixed">Mixed</option>
                </optgroup>
                <optgroup label="Region">
                    <option value="Europe and North America">Europe and North America</option>
                    <option value="Asia and the Pasific">Asia and the Pasific</option>
                    <option value="Latin America and the Caribian">Latin America and the Caribian</option>
                    <option value="Africa">Africa</option>
                    <option value="Arab States">Arab States</option>
                </optgroup>
                <optgroup label='Country'>
                    <option value="USA">USA</option>
                    <option value="Italy">Italy</option>
                    <option value="Bangladesh">Bangladesh</option>
                </optgroup>
            </select>
            {/* <label>
                Filter By Category:
                    <select value={props.sortBy} onChange={props.handleChange}>
                    <option value="">None</option>
                    {sites.filter(c => (
                        <option key={c.id}value={c.category.name}>{c.category}</option>
                        ))}
                    <option value="cultural">Cultural</option>
                    <option value="natural">Natural</option>
                    <option value="mixed">Mixed</option>
                </select>
            </label>
            <label>
                Filter By Region:
                    <select value={props.sortBy} onChange={props.handleChange}>
                    <option value="">None</option>
                    {sites.filter(c => (
                        <option key={c.id}value={c.category.name}>{c.category}</option>
                        ))}
                    <option value="Europe and North America">Europe and North America</option>
                    <option value="Asia and the Pasific">Asia and the Pasific</option>
                    <option value="Latin America and the Caribian">Latin America and the Caribian</option>
                    <option value="Africa">Africa</option>
                    <option value="Arab States">Arab States</option>
                </select>
            </label>
            <label>
                Filter By Country:
                    <select value={props.sortBy} onChange={props.handleChange}>
                    <option value="">None</option>
                    <li>
                    {props.map(c => (
                        <ul key={c.id}value={c.category.name}>{c.category}</ul>
                        ))}
                    </li>
                    <option value="USA">USA</option>
                    <option value="Italy">Italy</option>
                    <option value="Bangladesh">Bangladesh</option>
                </select>
            </label> */}
        </div>
    )
}

export default Filter