import { Link } from 'react-router-dom'

export function Banner() {
  return (
    <div className='bg-color1 text-color5 py-2.5 text-center'>
      <span className='inline-flex items-center gap-1'>
        <i className='fa-solid fa-tag fa-flip-horizontal'></i>
        <p className='font-medium' translate='no'>
          Black Friday
        </p>
      </span>

      <Link className='ml-2 inline-block hover:underline' to='#black-friday'>
        <p>
          Aproveite as <span className='hidden xs:inline'>melhores</span>{' '}
          ofertas<span className='hidden sm:inline'> da Black Friday</span>!
        </p>
      </Link>
    </div>
  )
}
