import React from 'react';

class Search extends React.Component {
    state = {  }
    render() {
        return (
            <form name='sites_search' className='sites_search' action="/en/list">
                <div className='searchbox-big searchbox'>
                    <div className='searchbox-big-in'>
                        <input type="text" name='search' placeholder='Search the List' className='text box-padding' title='search' />
                        <span className='button'>
                            <button className='small_button plain_button button_padding' value='Search'>Search</button>
                        </span>
                    </div>
                </div>
            </form>
         );
    }
}

export default Search;