import { Features } from './Features.jsx'
import { Brands } from './Brands.jsx'

export function Main() {
  return (
    <main className='p-5 md:py-10 md:px-20'>
      <Features />
      <hr className='border-black/50' />

      <Brands />
    </main>
  )
}
