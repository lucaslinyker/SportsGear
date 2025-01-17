import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

const social = [
  { link: 'https://www.facebook.com/', icon: faFacebook },
  { link: 'https://www.instagram.com/', icon: faInstagram },
  { link: 'https://x.com/', icon: faXTwitter },
  { link: 'https://www.youtube.com/', icon: faYoutube },
]

const sections = [
  { title: 'Seções', links: ['Masculino', 'Feminino', 'Infantil', 'Blog'] },
  {
    title: 'Suporte',
    links: ['Contate nos', 'FAQs', 'Guia de tamanho', 'Envio & Devoluções'],
  },
  {
    title: 'Empresa',
    links: [
      'Nossa história',
      'Trabalhe conosco',
      'Termos & Condições',
      'Política & Privacidade',
    ],
  },
]

export function Footer() {
  return (
    <footer className='bg-color4 p-5 xs:p-10 grid grid-cols-[1fr] grid-rows-repeat-3max gap-y-10 lg:grid-cols-[repeat(2,_1fr)] lg:grid-rows-[1fr,_30%]'>
      <div className='footer__brand'>
        <h2 className='brand__title mb-5 text-3xl font-bold'>Sports Gear</h2>
        <p>Inspirando pessoas a serem mais ativas e saudáveis.</p>

        <nav className='brand__social'>
          <ul className='social__list mx-0 mt-4 mb-5 flex gap-5'>
            {social.map(socialItem => {
              return (
                <li key={socialItem.link}>
                  <Link
                    to={socialItem.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center justify-center bg-color3 text-color5 rounded-full size-12'
                  >
                    <FontAwesomeIcon
                      icon={socialItem.icon}
                      size='lg'
                      className='transition-[font-size] duration-100 ease-linear hover:text-3xl'
                    />
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>

      <div>
        <ul
          className='grid justify-between grid-cols-[repeat(3,_min-content)] sm:grid-cols-repeat-3max'>
          {sections.map(section => {
            return (
              <li key={section.title}>
                <h4 className='sections__title font-bold text-lg mb-3'>
                  {section.title}
                </h4>
                <nav>
                  <ul className='flex flex-col gap-y-1'>
                    {section.links.map(link => {
                      return (
                        <li className='sections__item' key={link}>
                          <Link
                            to={`#${link.toLowerCase().replace(/\s/g, '-').replace('&', 'e')}`}
                            className='sections__link'
                          >
                            {link}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </nav>
              </li>
            )
          })}
        </ul>
      </div>

      <hr className='border-black/50 row-start-3 lg:row-start-2 col-span-full' />

      <p className='row-start-3 lg:row-start-2 col-span-full mt-5 lg:mt-2'>
        <FontAwesomeIcon icon={faCopyright} /> 2023 Sports Gear, Inc. Todos os
        direitos reservados.
      </p>
    </footer>
  )
}
