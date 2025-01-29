import React from 'react'
import Landing from './components/Landing/Landing';
import OurPartner from './components/Partner/Partner';
import Card from './components/Card/Card';
import Training from './components/Traning/Traning';
import Testimonial from './components/Testimonial/Testimonial';
import Effort from './components/Effort/Effort';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Landing />
      <OurPartner />
      <Card />
      <Training />
      <Testimonial />
      <Effort />
      <Footer />
    </div>
  )
}

export default App
