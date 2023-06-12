import { Subtitle } from './subtitle'
import postgres from '../assets/postgres.svg'
import node from '../assets/node.svg'
import js from '../assets/javascript.svg'
import ts from '../assets/typescript.svg'
import mongo from '../assets/mongo.svg'
import maria from '../assets/maria.svg'
import react from '../assets/react.svg'
import nest from '../assets/nest.svg'
import aws from '../assets/aws.svg'

interface Image {
  image: string
  name: string
}

const IMAGES: Image[] = [
  {
    image: node,
    name: 'Node.js',
  },
  {
    image: ts,
    name: 'TypeScript',
  },
  {
    image: js,
    name: 'JavaScript',
  },
  {
    image: postgres,
    name: 'PostgreSQL',
  },
  {
    image: mongo,
    name: 'MongoDB',
  },
  {
    image: maria,
    name: 'MariaDB',
  },
  {
    image: react,
    name: 'React',
  },
  {
    image: nest,
    name: 'NestJS',
  },
  {
    image: aws,
    name: 'Amazon Web Services',
  },
]

export const Stack = () => {
  return (
    <>
      <div className="mb-[70px]">
        <Subtitle>Stack Tecnológico</Subtitle>
        <p className="text-center mt-4">Estas son las tecnologías con las que trabajo</p>
      </div>
      <div className="grid gap-20 md:gap-32 grid-cols-2 lg:grid-cols-3 items-center justify-items-center w-5/6 mx-auto">
        {IMAGES.map((image, index) => (
          <div
            key={`image-${index}`}
            className="flex flex-col items-center gap-4 hover:text-secondary transition-all hover:scale-110"
          >
            <img
              className="w-auto  max-h-[60px] md:max-h-[120px]"
              src={image.image}
              alt={image.name}
              title={image.name.toUpperCase()}
            />
            <p className="font-fira-code">{image.name}</p>
          </div>
        ))}
      </div>
    </>
  )
}
