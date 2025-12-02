import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import SocialAndShowroomSection from '../components/SocialAndShowroomSection';

const ContactUs = () => {
    return (
        <>
            <Navbar />
            <ContactSection />
            <SocialAndShowroomSection />
            <Footer />
        </>
    );
};

export default ContactUs;