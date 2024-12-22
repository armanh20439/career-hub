import React from 'react';
import Banner from '../Banner/Banner';
import Cataforilist from '../Catagorilist/Catagorilist';
import FeaturedJobs from '../FeaturesJobs/FeaturedJobs';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Cataforilist></Cataforilist>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;