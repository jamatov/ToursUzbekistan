import React from 'react'
import img1 from '../../Images/KhivaImages/xivamore1.jpg'
import img2 from '../../Images/KhivaImages/xivamore2.jpg'
import img3 from '../../Images/KhivaImages/xivamore3.jpg'
import img4 from '../../Images/KhivaImages/xivamore4.jpg'
import img5 from '../../Images/KhivaImages/xivamore5.jpg'
import img6 from '../../Images/KhivaImages/xivamore6.jpg'


export default function BuxoroGalereya() {
  return (
    <section className='Galereya'>
      <div className="container">
        <div className="row">
          <a href="../../Images/KhivaImages/xivamore1.jpg" data-gallery='bukh'>
            <img src={img1} alt="" />
          </a>

          <a href="../../Images/KhivaImages/xivamore2.jpg" data-gallery='bukh'>
            <img src={img2} alt="" />
          </a>

          <a href="../../Images/KhivaImages/xivamore3.jpg" data-gallery='bukh'>
            <img src={img3} alt="" />
          </a>

          <a href="../../Images/KhivaImages/xivamore4.jpg" data-gallery='bukh'>
            <img src={img4} alt="" />
          </a>

          <a href="../../Images/KhivaImages/xivamore5.jpg" data-gallery='bukh'>
            <img src={img5} alt="" />
          </a>

          <a href="../../Images/KhivaImages/xivamore6.jpg" data-gallery='bukh'>
            <img src={img6} alt="" />
          </a>
        </div>
      </div>
    </section>
  )
}
