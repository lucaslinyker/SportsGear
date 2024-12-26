import { Link } from 'react-router-dom'

const brands = [
  'Nike', 'Adidas', 'Puma', 'Mizuno', 'Olympikus',
  'Fila', 'Reebok', 'Under Armour', 'New Balance'
]

export function Brands() {
  return (
    <section className='-mx-5 md:-mx-20 p-5 md:py-10 md:px-0 text-center bg-color3 text-color5'>
      <h2 className='text-2xl font-bold mb-5 md:mb-10'>
        Algumas de nossas melhores marcas do esporte
      </h2>

      <div className='grid grid-cols-repeat-2max sm:grid-cols-none sm:flex gap-5 md:gap-10 justify-evenly'>
        {brands.map((brand, index) => (
          <Link
            key={index}
            className='hover:text-color4 hover:underline transition-colors'
            to={`#${brand.toLowerCase()}`}
          >
            <h3 className='text-lg font-bold'>{brand}</h3>
          </Link>
        ))}
      </div>
    </section>
  )
}
