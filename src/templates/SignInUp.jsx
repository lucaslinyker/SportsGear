import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MinimumHeader } from '../components/MinimumHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

export function SignInUp({ title, action }) {
  useEffect(() => {
    document.body.classList.add('bg-gradient-to-br', 'from-color0', 'to-color3')

    return () => {
      document.body.classList.remove(
        'bg-gradient-to-br',
        'from-color0',
        'to-color3'
      )
    }
  }, [])

  return (
    <>
      <MinimumHeader />

      {/*  NOTE:  the value 2.375rem refers to the Height / 2 of the header, enough to keep the main centered in the remaining part */}
      <main className='absolute top-[calc(50%_+_30px)] sm:top-[calc(50%_+_2.375rem)] left-1/2 -translate-x-1/2 -translate-y-1/2 animate-show-main text-color5 bg-color1 p-5 sm:p-10 rounded-lg w-11/12 sm:w-[500px] shadow-1 hover:shadow-2 transition-shadow'>
        <h1 className='mb-5 font-bold text-2xl sm:text-3xl'>{title}</h1>

        {/*  TODO:  implement the auth with firebase/google */}
        <aside
          className='group border rounded-md hover:cursor-not-allowed hover:border-color4'
          title='not implemented yet'
        >
          <button
            className='w-full flex gap-2 justify-center items-center py-1 group-hover:cursor-not-allowed group-hover:text-color4'
            type='button'
            disabled
          >
            <FontAwesomeIcon icon={faGoogle} size='lg' />
            <h2 className='text-lg'>{`${action} com o Google`}</h2>
          </button>
        </aside>

        <div className='grid grid-cols-[1fr_auto_1fr] gap-x-4 items-center my-2'>
          <hr />
          <p className='font-light tracking-wider'>ou</p>
          <hr />
        </div>

        <form id='form' autoComplete='on'>
          <label htmlFor='email'>E-mail:</label>
          <input
            className='w-full h-10 p-2 mt-1 mb-2 rounded text-color0 outline-none transition-[border] duration-75 ease-linear focus:border-[3px] focus:border-color4'
            type='email'
            id='email'
            placeholder='seu.email@gmail.com'
            autoComplete='email'
            autoFocus
            required
          />

          <label htmlFor='password'>Senha:</label>
          <input
            className='w-full h-10 p-2 mt-1 mb-2 rounded text-color0 outline-none transition-[border] duration-75 ease-linear focus:border-[3px] focus:border-color4'
            type='password'
            id='password'
            placeholder='91nu7#ww'
            autoComplete={
              action === 'Entrar' ? 'current-password' : 'new-password'
            }
            minLength='8'
            required
          />

          {action === 'Cadastrar' && (
            <>
              <label htmlFor='confirm-password'>Confirmar senha:</label>
              <input
                className='w-full h-10 p-2 mt-1 mb-2 rounded text-color0 outline-none transition-[border] duration-75 ease-linear focus:border-[3px] focus:border-color4'
                type='password'
                id='confirm-password'
                placeholder='91nu7#ww'
                autoComplete='new-password'
                required
              />
            </>
          )}

          <button
            className='block mt-2 mb-2 py-2 w-full rounded bg-color4 text-color0 font-bold text-xl hover:bg-color3 hover:text-color5 active:scale-[.99] custom-transition'
            type='submit'
          >
            {action}
          </button>

          {action === 'Entrar' ? (
            <div className='flex flex-col mt-4 xs:mt-0 xs:flex-row xs:justify-between'>
              <Link className='w-fit font-light' to='#reset'>
                Esqueci a senha
              </Link>
              <Link className='w-fit font-light' to='/cadastrar'>
                Não tem uma conta?
              </Link>
            </div>
          ) : (
            <div className='text-right'>
              <Link className='font-light' to='/entrar'>
                Já tem uma conta?
              </Link>
            </div>
          )}
        </form>
      </main>
    </>
  )
}
