import React from 'react';
import Directory from '../../components/directory/directory.component';
//import './homepage.styles.scss';

import {HomePageContainer} from './homepage.styles';


const HomePage=() =>(
    <HomePageContainer>
    {/* <div className='homepage'> */}
        <Directory />
    {/* </div> */}
    </HomePageContainer>

);

export default HomePage;