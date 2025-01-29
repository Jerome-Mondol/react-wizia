import React from 'react'
import Landing from './components/Landing/Landing';
import OurPartner from './components/Partner/Partner';
import Card from './components/Card/Card';
import Traning from './components/Traning/Traning';
import Testimonial from './components/Testimonial/Testimonial';
import Effort from './components/Effort/Effort';

const App = () => {
  return (
    <div>
      <Landing />
      <OurPartner />
      <Card />
      <Traning />
      <Testimonial />
      <Effort />
    </div>
  )
}

export default App
