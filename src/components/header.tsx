import marianotella from '../../public/marianotella.png'

export const Header = () => {
  return (
    <div className="flex gap-6 flex-col lg:flex-row">
      <div className="p-2 lg:p-10">
        <img
          src={marianotella}
          alt="marianotella"
          className="drop-shadow-[0_0_5px_rgba(227,223,214,1)] mx-auto"
        />
      </div>
      <div className="flex flex-col justify-center text-center lg:text-left">
        <h3 className="font-fira-code text-3xl mb-10">Hola.</h3>
        <h2 className="font-fira-code text-2xl md:text-3xl lg:text-5xl">FULL-STACK DEVELOPER_</h2>
        <h1 className="font-fira-code text-2xl md:text-3xl lg:text-5xl">SOY MARIANO TELLAECHE</h1>
      </div>
    </div>
  )
}
