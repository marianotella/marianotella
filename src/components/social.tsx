import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'

interface Social {
  image: string
  name: string
  url: string
}

const SOCIAL: Social[] = [
  {
    image: github,
    name: 'Github',
    url: 'https://github.com/marianotella',
  },
  {
    image: linkedin,
    name: 'Linkedin',
    url: 'https://linkedin.com/in/marianotella',
  },
]

export const Social = () => {
  return (
    <div className="flex md:flex-col gap-4 justify-center">
      {SOCIAL.map((social) => {
        return (
          <a
            key={social.image}
            href={social.url}
            target="_blank"
            rel="noreferrer"
            title={social.name}
          >
            <img
              className="w-6 hover:drop-shadow-[0_0_2px_rgba(255,255,255,0.75)] transition-all"
              src={social.image}
              alt={social.name}
            />
          </a>
        )
      })}
    </div>
  )
}
