import * as categoryImages from '../assets/images/categories/export.js'

import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export function Categories() {
  return (
    <section className='my-10 text-center'>
      <h2 className='text-3xl font-bold mb-10'>
        Seu novo esporte preferido está aqui
      </h2>

      <div className='grid grid-cols-[repeat(2,_1fr)] xl:grid-cols-[repeat(3,_1fr)] grid-rows-[repeat(3,_.7fr)] xl:grid-rows-none gap-5 md:gap-10'>
        <Link
          className='overflow-hidden h-full xl:h-[32.5vw] relative text-color5 cursor-pointer rounded-md shadow-4 hover:shadow-5 transition hover:scale-[1.01] col-span-2'
          to='#futebol'
        >
          <img
            className='w-full h-full object-cover'
            src={categoryImages.soccer}
            alt='Quadra de futebol'
          />

          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <h3 className='font-bold text-2xl'>
              Toda a linha futebol
            </h3>
            <p className='text-lg'>
              Compre agora
              <FontAwesomeIcon icon={faArrowRight} className='ml-1' />
            </p>
          </div>
        </Link>

        <Link
          className='overflow-hidden h-full xl:h-[32.5vw] relative text-color5 cursor-pointer rounded-md shadow-4 hover:shadow-5 transition hover:scale-[1.01]'
          to='#esqui'
        >
          <img
            className='w-full h-full object-cover'
            src={categoryImages.snow}
            alt='Homem esquiando'
          />

          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <h3 className='font-bold text-2xl'>
              Equipamento para esquiar
            </h3>
            <p className='text-lg'>
              Compre agora
              <FontAwesomeIcon icon={faArrowRight} className='ml-1' />
            </p>
          </div>
        </Link>

        <Link
          className='overflow-hidden h-full xl:h-[32.5vw] relative text-color5 cursor-pointer rounded-md shadow-4 hover:shadow-5 transition hover:scale-[1.01]'
          to='#basquete'
        >
          <img
            className='w-full h-full object-cover'
            loading='lazy'
            src={categoryImages.basketball}
            alt='Menina segurando bola de basquete'
          />

          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <h3 className='font-bold text-2xl'>
              Todos no basquete
            </h3>
            <p className='text-lg'>
              Compre agora
              <FontAwesomeIcon icon={faArrowRight} className='ml-1' />
            </p>
          </div>
        </Link>

        <Link
          className='overflow-hidden h-full xl:h-[32.5vw] relative text-color5 cursor-pointer rounded-md shadow-4 hover:shadow-5 transition hover:scale-[1.01] col-span-2'
          to='#academia'
        >
          <img
            className='w-full h-full object-cover'
            loading='lazy'
            src={categoryImages.training}
            alt='Homem levantando barra de peso'
          />

          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <h3 className='font-bold text-2xl'>
              Leve a academia para sua casa
            </h3>
            <p className='text-lg'>
              Compre agora
              <FontAwesomeIcon icon={faArrowRight} className='ml-1' />
            </p>
          </div>
        </Link>
      </div>
    </section>
  )
}
