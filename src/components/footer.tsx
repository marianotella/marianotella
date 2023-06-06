import { Subtitle } from './subtitle'
import react from '../assets/react.svg'
import vite from '../assets/vite.svg'

export const Footer = () => {
  return (
    <footer>
      <Subtitle extraClass="text-lg normal-case">Hecho con</Subtitle>
      <div className="flex gap-1 justify-center items-center">
        <img className="w-6" src={react} alt="React" />
        <p className="text-2xl">+</p>
        <img className="w-6" src={vite} alt="Vite" />
      </div>
    </footer>
  )
}
