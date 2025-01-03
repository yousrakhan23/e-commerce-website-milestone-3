import React from 'react'
import Carousel from '@/components/Carousel';
import HeroSection from '@/components/HeroSection';
import Product from "../app/Product/page";

const HomePage = () => {
  return (
    <div>
      <Carousel />
      <HeroSection />
      <Product />
    </div>
  )
}

export default HomePage;