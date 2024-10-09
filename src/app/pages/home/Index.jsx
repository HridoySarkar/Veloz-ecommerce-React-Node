// src/app/home/Index.js
import React from 'react';
import Navbar from '../../../components/navbar/Navbar';
import HeroBanner from '../../../components/heroBanner/HeroBanner';
import FeatureProducts from '../../../components/featureProducts/FeatureProducts';
import CampBanner from '../../../components/campbanner/Index';
import Footer from '../../../components/footer/Index'

const Index = () => {
    return (
        <main className='page-width'>
            <Navbar/>
            <HeroBanner/>
            <FeatureProducts/>
            <CampBanner />



            {/* Footer */}
            <Footer/>
        </main>
    );
};

export default Index;
