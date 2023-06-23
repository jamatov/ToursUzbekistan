import React from 'react'
import SamarqandHeader from '../Components/Smarqand/SamarqandHeader'
import SamarqandTourInfo from '../Components/Smarqand/SamarqandTourInfo'
import SamarqandInfo from '../Components/Smarqand/SamarqandInfo'

export default function Samarkand() {
  return (
    <section className='Samarkand'>
      <SamarqandHeader/>
      <SamarqandInfo/>
      <SamarqandTourInfo/>
    </section>
  )
}
