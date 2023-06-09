import { Subtitle } from './subtitle'

export const Contact = () => {
  return (
    <>
      <div className="mb-[70px]">
        <Subtitle>Contacto</Subtitle>
      </div>
      <p className="md:w-3/6 mx-auto text-center text-balanced">
        Activamente en busca de nuevas oportunidades, mi bandeja de entrada está abierta. Si tienes
        un proyecto con el que empezar, una pregunta o simplemente quieres saludarme, ¡haré todo lo
        posible por responderte!
      </p>
      <a
        href="mailto:marianotellaeche@gmail.com?subject=Contacto%20desde%20la%20web%20"
        className="border-solid border-secondary border-2 py-3 px-6 mt-10 block mx-auto text-center w-fit rounded-2xl hover:bg-[#D9D9D966] hover:scale-110 transition-all duration-300"
      >
        ENVIAR EMAIL
      </a>
    </>
  )
}
