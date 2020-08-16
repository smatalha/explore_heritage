// import React from 'react';

// const Search = props => {
//     return (
//         <>
//         <form name='sites_search' className='sites_search' action="/en/list">
//             <div className='searchbox-big searchbox'>
//                 <div className='searchbox-big-in'>
//                     <input type="text" name='search' placeholder='Search the List' className='text box-padding' title='search'
//                     onChange={(e) => props.handleSearch(e.target.value)}
//                     />
//                     {/* <span className='button'>
//                         <button className='small_button plain_button button_padding' value='Search'>Search</button>
//                     </span> */}
//                 </div>
//             </div>
//         </form>
//         </>
//     );
// }

// export default Search;
import React from 'react'
import { Input } from 'semantic-ui-react'

const Search = props => (
    <div className='searchbox-big searchbox'>
        <Input fluid icon='search' placeholder='Search the List...' onChange={(e) => props.handleSearch(e.target.value)} />
    </div>
)

export default Search