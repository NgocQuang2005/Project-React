import BodyIndex from "./BodyIndex"
import Footer from "./Footer"
import Header from "./Header"
import ProductList from "./ProductList"

import SlideA from "./Slide"
import SubToOurNews from "./SubToOurNews"
import WhatOffer from "./WhatOffer"


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