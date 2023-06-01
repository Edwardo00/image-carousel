import React, { useState } from 'react'
import './App.css'
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";

const images =[
  "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
];

const App = () => {

const [current, setCurrent] = useState(0);

function nextSlide() {
  setCurrent(current === images.length - 1 ? 0 : current + 1)
}

function prevSlide() {
  setCurrent(current === 0 ? images.length - 1 : current - 1)
}

  return (
    <div className='gradient__bg'>
      <h1>Image Carousel</h1>
      <div className='main-body'>
        <AiOutlineDoubleLeft onClick={prevSlide}  />
        {images.map(
          (image, index) => current === index && (
            <div key={image} className='img-body'>
              <img className='slide-in-blurred-top' src={image} alt='images' />
            </div>
          )
        )}
        <AiOutlineDoubleRight onClick={nextSlide} />
      </div>
    </div>
  )
}

export default App