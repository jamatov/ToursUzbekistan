import React from 'react'

export default function ContactForm() {
  return (
    <section className='ContactForm'>
      <div className="container">
        <h2>Kontaktlar</h2>
        <div className="row">
          <div className="col-md-7">
            <form  action="">
              <input className='col-12' type="text" placeholder='Ism' />
              <input className='col-12' type="text" placeholder='Telefon raqami' />
              <textarea className='col-12' name="" id="" cols="30" placeholder='Xabar' rows="10"></textarea>
              <button>YUBORISH</button>
            </form>
          </div>
          <div className="col-md-5">
            <div className="contact-info">
              <div>
                <h3>Manzil</h3>
                <p>Toshkent sh., Olmazor ko’chasi, 327А.</p>
              </div>

              <div>
                <h3>Telefon</h3>
                <a href="">+998 (93) 809-27-10</a>
                <a href="">+998 (33) 177-27-10</a>
              </div>

              <div>
                <h3>Pochta</h3>
                <p>uztour@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
