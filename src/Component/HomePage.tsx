import BodyIndex from "./BodyIndex"
import Footer from "./Footer"
import Header from "./Header"

import SlideA from "./Slide"
import WhatOffer from "./WhatOffer"


const HomePage = () => {
  return (
    <div>
      <Header/>
      <SlideA/>
      <BodyIndex/>
      <div className="bg-gray-300">
          <WhatOffer/> 
      </div>
      
      <Footer/>
    </div>
  )
}

export default HomePage