import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutUsSection from '../components/AboutUsSection';
import AboutUsFeaturesSection from '../components/AboutUsFeaturesSection';

const AboutUs = () => {
    return (
        <>
            <Navbar />
            <AboutUsSection />
            <AboutUsFeaturesSection />
            <Footer />
        </>
    );
};

export default AboutUs;