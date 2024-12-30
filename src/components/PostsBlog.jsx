import * as postsImages from '../assets/images/blog/export.js'

import { Link } from 'react-router-dom'

const posts = [
  {
    title: 'Aumentando a massa muscular com halteres',
    alt: 'Anilhas e halteres',
    date: '28/12/2024',
    image: postsImages.dumbbells,
  },
  {
    title: 'Como ter uma alimentação saudável',
    alt: 'Prancheta',
    date: '18/12/2024',
    image: postsImages.clipboard,
  },
  {
    title: 'Três maneiras de ter braços maiores',
    alt: 'Treino de braço com halter',
    date: '8/12/2024',
    image: postsImages.training,
  },
  {
    title: 'Anilha: o que é e para que serve',
    alt: 'Anilha',
    date: '1/12/2024',
    image: postsImages.weight,
  },
]

export function PostsBlog() {
  return (
    <section className='my-10'>
      <h2 className='font-bold text-3xl text-center mb-5'>Blog Fitness</h2>

      <div className='grid gap-10 grid-cols-1 mx-5 sm:grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4'>
        {posts.map(({ title, date, image, alt }, index) => (
          <Link
            className='overflow-hidden relative rounded-md bg-color4 transition-shadow duration-300 shadow-4 hover:shadow-5 last:md:hidden last:lg:block'
            to={`#post${index + 1}`}
            key={index}
          >
            <img
              className='w-full h-full object-cover'
              loading='lazy'
              height='100%'
              width='100%'
              src={image}
              alt={alt}
            />

            <p className='absolute p-1 bg-color3 text-color5 top-0 rounded-ee-md'>
              {date}
            </p>
            <p className='absolute p-1 bg-color3 text-color5 bottom-0 rounded-se-md max-w-48'>
              {title}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
