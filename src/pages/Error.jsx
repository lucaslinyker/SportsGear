import { SomethingHappened } from '../templates/SomethingHappened'
import { useRouteError } from 'react-router-dom'

export function Error() {
  const error = useRouteError()
  console.log(error)

  return (
    <SomethingHappened
      text='Desculpe, um erro inesperado ocorreu.'
      title='Algo deu errado. Tente novamente mais tarde.'
      subTitle={<i>{error.statusText || error.message}</i>}
    />
  )
}
