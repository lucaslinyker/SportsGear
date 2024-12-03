import { SomethingHappened } from '../templates/SomethingHappened'

export function NotFound() {
  return (
    <SomethingHappened
      text='404'
      title='Página não encontrada'
      subTitle='Desculpe, nós não encontramos a página que você está procurando.'
    />
  )
}
