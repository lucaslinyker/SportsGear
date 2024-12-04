import { useEffect } from 'react'

export function Home() {
  useEffect(() => {
    document.body.classList.add('bg-color5')
    return () => {
      document.body.classList.remove('bg-color5')
    }
  }, [])

  return (
    <></>
  )
}
