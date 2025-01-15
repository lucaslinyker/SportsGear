import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruckFast, faRotateLeft, faLock, faTag } from '@fortawesome/free-solid-svg-icons'

const features = [
  {
    icon: faTruckFast,
    title: 'Entrega grátis',
    description: 'Para pedidos acima de R$ 100',
  },
  {
    icon: faRotateLeft,
    title: 'Devolução grátis',
    description: 'Devolução em até 7 dias',
  },
  {
    icon: faLock,
    title: 'Compras seguras',
    description: 'Com criptografia de dados',
  },
  {
    icon: faTag,
    flip: 'horizontal',
    title: 'Milhares de produtos',
    description: 'Para você escolher',
  },
]

export function Features() {
  return (
    <section className='mb-10 grid justify-center gap-5 grid-cols-repeat-1max sm:justify-between sm:gap-10 sm:grid-cols-repeat-2max lg:grid-cols-repeat-3max xl:flex'>
      {features.map(feature => (
        <div className='flex gap-2 lg:last:hidden xl:last:flex items-center' key={feature.title}>
          <FontAwesomeIcon icon={feature.icon} flip={feature.flip} size='2xl' className='bg-color4 p-3 size-9 rounded-full' />

          <div>
            <h3 className='font-bold text-lg'>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        </div>
      ))}
    </section>
  )
}
