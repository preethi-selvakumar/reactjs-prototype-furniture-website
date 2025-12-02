import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GalleryCategories from '../components/GalleryCategories';

const Gallery = () => {
    return (
        <>
            <Navbar />
            <GalleryCategories />
            <Footer />
        </>
    );
};

export default Gallery;