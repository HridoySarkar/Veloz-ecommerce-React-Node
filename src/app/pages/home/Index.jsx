// src/app/home/Index.js
import React, { useEffect } from 'react';
import HeroBanner from '../../../components/heroBanner/HeroBanner';
import FeatureProducts from '../../../components/featureProducts/FeatureProducts';
import CampBanner from '../../../components/campbanner/Index';
import { useDispatch } from 'react-redux';
import { cartSlice } from '../../../store/slices/cartSlice';

const Index = () => {
    let dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(cartSlice.actions.set_default_carts())
    },[dispatch])


    return (
        <main className='page-width'>
            <HeroBanner/>
            <FeatureProducts/>
            <CampBanner />
        </main>
    );
};

export default Index;
