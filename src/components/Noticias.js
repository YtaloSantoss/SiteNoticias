import React from 'react'
import { Category } from '../component/carousel/Category'
import Card from '../component/noticias/Card'
import Anuncio from '../component/anucio/Anuncio'
import { CategoryEventos } from '../component/carouselEventos/CategoryEventos'



const Noticias = () => {
  return (
    <section className='hero'>
      <Anuncio />
      <Category />
      <CategoryEventos />
      <Card />
    </section>
  )
}

export default Noticias