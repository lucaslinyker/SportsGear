import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Banner } from '../components/Banner'
import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'

import * as blackFridayImages from '../assets/images/event/blackFriday/export.js'

export function Home() {
  useEffect(() => {
    document.body.classList.add('bg-color5')
    return () => {
      document.body.classList.remove('bg-color5')
    }
  }, [])

  return (
    <>
      <Banner />

      <Header />

      <Link to='#black-friday'>
        <picture>
          <source media="(max-width: 640px)" srcSet={blackFridayImages.sm} />
          <img src={blackFridayImages.base} alt='Black Friday' width={'100%'} />
        </picture>
      </Link>

      <Main />

      <Footer />
    </>
  )
}
