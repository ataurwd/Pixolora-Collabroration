import React from 'react';
import Hero from './Hero';
import OceanFreigh from './OceanFreigh';
import Transporte from './Transporte';
import Form from './Form';
import Conocenos from './Conocenos';
import Packaging from './Packaging';
import Testimonials from './testimonials';
import HomContactText from './HomContactText';


const Home = () => {
    return (
        <div>
            <Hero/>
            <OceanFreigh/>
            <Transporte/>
            <Form/>
            <Conocenos/>
            <Packaging/>
            <Testimonials/>
            <HomContactText/>
        </div>
    );
};

export default Home;