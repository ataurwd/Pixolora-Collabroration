import React from 'react';
import Hero from './Hero';
import OceanFreigh from './OceanFreigh';
import Transporte from './Transporte';
import Form from './Form';
import Conocenos from './Conocenos';
import Packaging from './Packaging';
import Testimonials from './testimonials';
import HomContactText from './HomContactText';
import CompleteFreight from './CompleteFreight';
import SLiderMarque from './SLiderMarque';


const Home = () => {
    return (
        <div>
            <Hero/>
            <OceanFreigh/>
            <Transporte/>
            <SLiderMarque/>
            <Form/>
            <Conocenos/>
            <Packaging/>
            <CompleteFreight/>
            <Testimonials/>
            <HomContactText/>
        </div>
    );
};

export default Home;