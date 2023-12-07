import BodyIndex from "./ContentHome/BodyIndex"
import Footer from "./Layout/Footer"
import Header from "./Layout/Header"
import ProductList from "./ContentHome/ProductList"

import SlideA from "./ContentHome/Slide"
import SubToOurNews from "./ContentHome/SubToOurNews"
import WhatOffer from "./ContentHome/WhatOffer"


const HomePage = () => {
  return (
    <div>
      <Header/>
      <SlideA/>
      <div className="mt-5">
        <h2 className="text-center">Danh Sách Sản Phẩm</h2>
        <ProductList/>
      </div>
      <SubToOurNews/>
      <div className="bg-gray-300 mt-5">
          <WhatOffer/> 
      </div>
      <BodyIndex/>
      <Footer/>
    </div>
  )
}

export default HomePage