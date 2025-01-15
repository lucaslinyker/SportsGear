import { Link } from 'react-router-dom'

export function MinimumHeader() {
  return (
    //  REVIEW:  The padding, see at the Header.jsx like base padding
    <header className='bg-color4 py-3 sm:py-5 px-10 animate-show-header'>
      <Link className='inline-block hover:text-color1' to='/'>
        <h1 className='text-3xl font-bold' translate='no'>
          Sports Gear
        </h1>
      </Link>
    </header>
  )
}
