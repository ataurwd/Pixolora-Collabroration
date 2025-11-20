import React from 'react';
import Hero from './Hero';
import OceanFreigh from './OceanFreigh';
import Transporte from './Transporte';
import Form from './Form';


const Home = () => {
    return (
        <div>
            <Hero/>
            <OceanFreigh/>
            <Transporte/>
            <Form/>
        </div>
    );
};

export default Home;