import marianotella from '../../public/marianotella.png'
import { TypeAnimation } from 'react-type-animation'

export const Header = () => {
  return (
    <div className="flex gap-8 flex-col lg:flex-row">
      <div className="p-2 lg:p-10">
        <img
          src={marianotella}
          alt="marianotella"
          className="drop-shadow-[0_0_5px_rgba(227,223,214,1)] mx-auto w-[250px]"
        />
      </div>
      <div className="flex flex-col justify-center text-center lg:text-left min-h-min">
        <TypeAnimation
          className="font-fira-code text-3xl mb-10"
          sequence={[`Hola.`, 1000]}
          cursor={false}
          wrapper="p"
        />
        <TypeAnimation
          className="font-fira-code text-2xl md:text-3xl lg:text-5xl"
          sequence={[1500, `SOY MARIANO TELLAECHE`, 1000]}
          cursor={false}
          wrapper="h1"
        />
        <TypeAnimation
          className="font-fira-code text-2xl md:text-3xl lg:text-5xl text-secondary"
          sequence={[3000, `FULL-STACK DEVELOPER_`, 1000]}
          wrapper="h2"
        />
      </div>
    </div>
  )
}
