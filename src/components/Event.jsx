import * as backgroundImages from '../assets/images/event/backGround/export.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom'

export function Event() {
  return (
    <section className='mt-10 -mx-5 md:-mx-20 h-72 xs:h-80 md:h-[500px] relative'>
      <picture>
        <source media='(min-width: 2464px)' srcSet={backgroundImages.xl} />
        <source media='(min-width: 1232px)' srcSet={backgroundImages.lg} />
        <source media='(min-width: 616px)' srcSet={backgroundImages.base} />
        <source media='(min-width: 308px)' srcSet={backgroundImages.sm} />
        <img
          src={backgroundImages.xs}
          loading='lazy'
          className='h-full w-full object-cover'
          alt='Produtos de esporte'
        />
      </picture>

      <div className='text-center w-11/12 min-w-[auto] xs:w-auto sm:min-w-[450px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <h2 className='text-2xl sm:text-4xl font-bold mb-5'>
          Obtenha -50% da promoção Black Friday
        </h2>

        <div className='grid grid-cols-background font-black text-3xl xs:text-4xl sm:text-5xl'>
          <span>10</span>
          <span>:</span>
          <span>12</span>
          <span>:</span>
          <span>59</span>
          <span>:</span>
          <span>28</span>

          <span className='font-medium text-base sm:text-2xl'>Dias</span>
          <span className='font-medium text-base sm:text-2xl ml-[15px] col-span-2'>
            Horas
          </span>
          <span className='font-medium text-base sm:text-2xl ml-[15px] col-span-2'>
            Minutos
          </span>
          <span className='font-medium text-base sm:text-2xl ml-[15px] col-span-2'>
            Segundos
          </span>
        </div>

        <Link
          className='group block mt-5 py-2 rounded-sm text-color5 bg-color2 hover:bg-color1 hover:shadow-6 transition duration-300'
          to='#black-friday'
        >
          Compre agora{' '}
          <FontAwesomeIcon
            icon={faArrowRightLong}
            className='group-hover:translate-x-1 transition-transform duration-300'
          />
        </Link>
      </div>
    </section>
  )
}
