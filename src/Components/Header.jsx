import React from 'react'
// import { Header } from 'semantic-ui-react'
import Image from "../cover_page1.png"


const HeaderImg = () => (
    // <Header as='h2'>
    <div className='ym-wrapper'>
        <div className='header-banner'>
            <img circular src={Image} alt="Heritage" id="header"/>
            {/* <img circular src="https://i.insider.com/5d24516421a86104a0726044?width=1200&format=jpeg" alt="Heritage" id="header"/> */}
        </div>
    </div>
    // </Header>
)

export default HeaderImg;