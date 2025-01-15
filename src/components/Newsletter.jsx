import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarWeek, faHand, faBan, faTags } from '@fortawesome/free-solid-svg-icons'

const newsletterInfo = [
  { icon: faCalendarWeek, text: 'Artigos semanais' },
  { icon: faHand, text: 'Sem spans' },
  { icon: faBan, text: 'Cancele quando quiser' },
  { icon: faTags, text: 'Promoções exclusivas' },
]

function handleSubmit(event) {
  event.preventDefault()
  alert('Você receberá as novidades no seu e-mail!')
}

//  TODO:  implement the register with firebase
export function Newsletter() {
  return (
    <section className='grid grid-cols-2 lg:grid-cols-6'>
      <div className='col-span-2 lg:col-span-3 lg:pr-5'>
        <h2 className='text-2xl font-bold mb-2 col-span-2 lg:col-auto'>
          Por dentro de tudo o que acontece no mundo do esporte!
        </h2>
        <p className='mb-7'>
          Últimas notícias, análises, entrevistas e curiosidades sobre o seu
          esporte favorito.
        </p>

        <form className='h-12 flex gap-2 mb-5 lg:mb-0' onSubmit={(event) => handleSubmit(event)}>
          <input
            className='min-w-24 w-2/3 bg-color4 text-color0 text-base rounded px-1 transition-colors focus:outline-none focus:border-2 focus:border-color1 placeholder:text-zinc-600'
            id='newsletter-email'
            type='email'
            placeholder='Seu e-mail'
            autoComplete='email'
            required
          />
          <button
            className='px-5 bg-color2 text-color5 text-base rounded transition-colors hover:cursor-pointer hover:bg-color1'
            type='submit'
          >
            Inscrever
          </button>
        </form>
      </div>

      <div className='row-start-2 lg:row-auto col-span-2 lg:col-start-4 lg:col-end-7 grid grid-cols-2 gap-2 lg:pl-5'>
        {newsletterInfo.map((info, index) => (
          <div key={index} className='flex items-center gap-2'>
            <FontAwesomeIcon icon={info.icon} size='2xl' className='newsletter__icon bg-color4 rounded-full size-8 p-3' />
            <p>{info.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
