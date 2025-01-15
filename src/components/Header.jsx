import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping, faHeart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const linksMenu = [
  { title: 'Masculino', url: '#masc' },
  { title: 'Feminino', url: '#fem' },
  { title: 'Infantil', url: '#kid' },
  { title: 'Blog', url: '#blog' },
]

const linksMenuMobile = {
  auth: [
    { title: 'Entrar', url: '/entrar' },
    { title: 'Criar conta', url: '/cadastrar' },
  ],
  nav: linksMenu,
}

//  TODO:  redo the menu items
export function Header() {
  const [isAuth, setIsAuth] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const menuMobileRef = useRef(null)

  const toggleMenuMobile = (event) => {
    event.stopPropagation()
    setIsOpen((prevState) => !prevState)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuMobileRef.current && !menuMobileRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  useEffect(() => {
    setIsAuth(localStorage.getItem('logged') !== 'true')
  }, [])

  return (
    <header className='bg-color4 flex justify-between p-5 xs:px-10 items-center flex-col gap-2 md:flex-row md:gap-0'>
      <div className='w-full md:w-auto flex items-center gap-5 justify-between md:justify-normal'>
        <Link
          to='/'
          className='text-3xl hover:text-color1 font-bold'
        >
          <h1 translate='no'>Sports Gear</h1>
        </Link>

        <button
          className='lg:hidden active:scale-90 transition-transform duration-100'
          type='button'
          onClick={toggleMenuMobile}
        >
          <FontAwesomeIcon icon={faBars} size='xl' />
        </button>

        <nav className='hidden lg:block'>
          <ul className='flex gap-2'>
            {linksMenu.map(({ title, url }) => (
              <li key={title}>
                <Link to={url}>{title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className='w-full md:w-fit flex items-center gap-5'>
        {/*  TODO:  make the authentication with backend (Firebase) */}
        {isAuth && (
          <nav className='hidden lg:block'>
            <ul className='flex gap-3'>
              <li>
                <Link to='/entrar'>Entrar</Link>
              </li>
              <li>|</li>
              <li>
                <Link to='/cadastrar'>Criar conta</Link>
              </li>
            </ul>
          </nav>
        )}

        <div className='w-full md:w-auto flex items-center gap-5'>
          <form className='w-full md:w-52 relative flex h-7'>
            <label
              className='cursor-pointer absolute left-1 top-1/2 -translate-y-1/2'
              htmlFor='input-search'
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </label>
            <input
              className='w-full h-full bg-color5 rounded-lg pl-7 pr-2'
              type='text'
              id='input-search'
              placeholder='Buscar'
            />
          </form>

          <div className='flex gap-3'>
            <Link className='hover:text-color1' to='#favorites'>
              <FontAwesomeIcon icon={faHeart} />
            </Link>
            <Link
              className='flex items-center gap-1 hover:text-color1'
              to='#cart'
            >
              <FontAwesomeIcon icon={faCartShopping} />
              <span>0</span>
            </Link>
          </div>
        </div>
      </div>

      {isOpen && (
        <section
          ref={menuMobileRef}
          className='lg:hidden absolute top-0 right-0 z-10 bg-color4 border border-color1 p-5 rounded-l-md shadow-3 animate-show-menu transition-transform'
        >
          {isAuth && (
            <nav className='mb-5'>
              <ul className='flex flex-col gap-2'>
                {linksMenuMobile.auth.map(({ title, url }) => (
                  <li key={title}>
                    <Link to={url}>{title}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          <nav>
            <ul className='flex flex-col gap-2'>
              {linksMenuMobile.nav.map(({ title, url }) => (
                <li key={title}>
                  <Link to={url}>{title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>
      )}
    </header>
  )
}
