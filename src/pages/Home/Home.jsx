import React from 'react';
import Hero from './Hero';
import OceanFreigh from './OceanFreigh';
import Transporte from './Transporte';
import Form from './Form';
import Conocenos from './Conocenos';
import Packaging from './Packaging';


const Home = () => {
    return (
        <div>
            <Hero/>
            <OceanFreigh/>
            <Transporte/>
            <Form/>
            <Conocenos/>
            <Packaging/>
        </div>
    );
};

export default Home;