import React from 'react'
import img1 from '../../Images/about.jpg'
import img2 from '../../Images/secondabout.jpg'

export default function AboutInfo() {
  return (
    <section className='AboutInfo'>
      <div className="container">
        <h2>Biz haqimizda</h2>
        <div className="row  mb-5">
          <div className="col-md-4">
            <img src={img1} alt="" />
          </div>

          <div className="col-md-8 texts">
            <p>Biz sayohatchilar uchun turli xil turlar va ekskursiyalarni taklif qiluvchi sayyohlik agentligimiz. Bizning jamoamiz mijozlarimizga eng yaxshi xizmat va unutilmas sayohat tajribalarini taqdim etishga tayyor bo'lgan tajribali va professional sayohat mutaxassislaridan iborat.</p>
            <p>Agentligimiz butun dunyo bo'ylab individual va guruhli sayohatlarni tashkil etishga ixtisoslashgan. Biz mijozlarimizning har qanday istaklariga mos keladigan keng doiradagi turlar va sayohatlarni taqdim etamiz. Shuningdek, biz reyslar, mehmonxonalar va transport vositalarini bron qilish xizmatlarini taklif etamiz.</p>
          </div>
        </div>

        <div className="row clmnrvrs">
          

          <div className="col-md-8 texts">
            <p>Biz sayohatchilar uchun turli xil turlar va ekskursiyalarni taklif qiluvchi sayyohlik agentligimiz. Bizning jamoamiz mijozlarimizga eng yaxshi xizmat va unutilmas sayohat tajribalarini taqdim etishga tayyor bo'lgan tajribali va professional sayohat mutaxassislaridan iborat.</p>
            <p>Agentligimiz butun dunyo bo'ylab individual va guruhli sayohatlarni tashkil etishga ixtisoslashgan. Biz mijozlarimizning har qanday istaklariga mos keladigan keng doiradagi turlar va sayohatlarni taqdim etamiz. Shuningdek, biz reyslar, mehmonxonalar va transport vositalarini bron qilish xizmatlarini taklif etamiz.</p>
          </div>

          <div className="col-md-4">
            <img src={img2} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
