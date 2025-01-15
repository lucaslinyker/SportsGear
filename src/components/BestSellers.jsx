import { products } from '../api/bestSellers'
import { formatToReal } from '../utils/formatCurrency'

import { useState } from 'react'
import { Link } from 'react-router-dom'

export function BestSellers() {
  const [activeLinkCategory, setActiveLinkCategory] = useState(0)

  const handleClickCategory = (index) => {
    setActiveLinkCategory(index)
  }

  return (
    <section className='mt-10 text-center flex flex-col items-center'>
      <h2 className='text-2xl font-bold mb-3'>
        Produtos mais vendidos de 2024
      </h2>

      <nav className='mb-10'>
        <ul className='flex gap-3'>
          {[
            ['Masculino', '#masc'],
            ['Feminino', '#fem'],
            ['Infantil', '#kid'],
          ].map(([title, url], index) => (
            <li key={title}>
              <Link
                to={url}
                className={`transition-colors ${activeLinkCategory === index && 'text-color3'}`}
                onClick={() => handleClickCategory(index)}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className='sm:w-full grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {products.map(({ img, title, price, isNew = false }, index) => (
          <Link
            className={`text-left relative ${index >= 6 && 'md:hidden lg:block'}`}
            to={`#product${index + 1}`}
            key={index}
          >
            <img
              className='sm:w-full rounded-md mb-1 transition-shadow duration-300 shadow-4 hover:shadow-5'
              loading='lazy'
              height={600}
              width={300}
              src={img}
              alt={title}
            />
            {isNew &&
              <span className='absolute top-0 bg-color2 text-color5 px-3 py-2 rounded-tl-md rounded-br-md'>
                Novo
              </span>
            }

            <h3 className='text-lg font-bold'>{title}</h3>
            <p>{formatToReal(price)}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
