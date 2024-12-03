import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export function SomethingHappened({ text, title, subTitle }) {
  useEffect(() => {
    document.body.classList.add('h-full')
    document.getElementById('root').classList.add('h-full')

    return () => {
      document.body.classList.remove('h-full')
      document.getElementById('root').classList.remove('h-full')
    }
  }, [])

  return (
    <>
      <main className='grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8'>
        <div className='text-center'>
          <p className='text-base font-semibold text-color3'>{text}</p>
          <h1 className='mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
            {title}
          </h1>
          <p className='mt-6 text-base leading-7 text-gray-600'>{subTitle}</p>
          <div className='mt-10 flex flex-col items-center justify-center gap-y-3 gap-x-6 sm:flex-row'>
            <Link
              to='/'
              className='transition-colors rounded-md bg-color3 px-3.5 py-2.5 text-sm font-semibold text-color5 shadow-sm hover:no-underline hover:bg-color2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-color4'
            >
              Voltar ao início
            </Link>
            <Link
              to='#support'
              className='group text-sm font-semibold text-gray-900'
            >
              Falar com o suporte{' '}
              <span
                aria-hidden='true'
                className='inline-block transition-transform group-hover:translate-x-1'
              >
                &rarr;
              </span>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
