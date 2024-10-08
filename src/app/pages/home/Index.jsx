// src/app/home/Index.js
import React from 'react';
import Navbar from '../../../components/navbar/Navbar';
import HeroBanner from '../../../components/heroBanner/HeroBanner';
import FeatureProducts from '../../../components/featureProducts/FeatureProducts';

const Index = () => {
    return (
        <main>
            <Navbar/>
            <HeroBanner/>
            <FeatureProducts/>
        </main>
    );
};

export default Index;
