import React from 'react';
import Navbar from '../components/Nav';
import NavMobile from '../components/NavMobile';
import Footer from '../components/Footer';
import Services from '../components/Services';

const ServicesPage = () => {
  return (
    <>
      <Navbar />
      <NavMobile />
      <Services />
      <Footer />
    </>
  );
};

export default ServicesPage;
