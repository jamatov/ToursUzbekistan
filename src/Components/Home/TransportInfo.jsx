import React from 'react'
import car from '../../Images/car.jpg'
import salon from '../../Images/salon.jpg'

export default function TransportInfo() {
  return (
    <div className='TransportInfo'>
      <div className="container">
        <h2>Trasnport</h2>
        <div className="row clmnrvrs">
          <div className="col-md-6 mb-3 card-bodyy">
            <img className='salon-img' src={salon} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur. Magna congue orci lectus arcu amet fringilla. Ultricies amet et elit mauris id semper ullamcorper mauris. Ligula sollicitudin urna nec rhoncus sit egestas vestibulum sed. Velit aliquam sit consectetur turpis vulputate. Elementum vel cum placerat nunc consequat dignissim. Commodo lorem varius cras duis rhoncus quisque mi felis.</p>
          </div>

          <div className="col-md-6 mb-3 clmnrvrs  card-bodyy">
            <div>
              <h3>Stariya Hyundai</h3>
              <p>Lorem ipsum dolor sit amet consectetur. Magna congue orci lectus arcu amet fringilla. Ultricies amet et elit mauris id semper ullamcorper mauris. Ligula sollicitudin urna nec rhoncus sit egestas vestibulum sed. Velit aliquam sit consectetur turpis vulputate. Elementum vel cum placerat nunc consequat dignissim. Commodo lorem varius cras duis rhoncus quisque mi felis.</p>
            </div>
            <img src={car} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
