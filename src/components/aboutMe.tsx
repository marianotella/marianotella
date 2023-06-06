import { getYearsFromDate } from '../functions/time'
import { Subtitle } from './subtitle'

export const AboutMe = () => {
  const age = getYearsFromDate('1990-10-07')

  return (
    <>
      <div className="mb-[70px]">
        <Subtitle>Sobre mi</Subtitle>
      </div>
      <p className="text-base mb-5">
        Soy Mariano Tellaeche, de 32 años, originario de Los Toldos, provincia de Buenos Aires, pero
        resido en la Ciudad Autónoma de Buenos Aires desde 2009.
      </p>
      <p className="text-base mb-5">
        Desde 2016 trabajo en el campo del desarrollo de software, habiendo comenzado mis estudios
        en una tecnicatura de Desarrollo de Software varios años antes.
      </p>
      <p className="text-base mb-5">
        Me considero un programador experimentado y versátil, apasionado por resolver problemas. A
        lo largo de mi trayectoria, he adquirido habilidades en diversos lenguajes de programación,
        frameworks y herramientas, lo que me ha permitido adaptarme y enfrentar con éxito diversos
        desafíos.
      </p>
      <p className="text-base mb-5">
        Mi mayor fortaleza radica en mi compromiso con los clientes. Me involucro activamente en la
        identificación de problemas y en la búsqueda de soluciones efectivas y eficientes. Creo
        firmemente en comprender las necesidades del cliente y entregar resultados de alta calidad.
      </p>
      <p className="text-base mb-5">
        A lo largo del tiempo, he aprendido a ser paciente, a escuchar y a recibir feedback
        constructivo, habilidades fundamentales para el crecimiento y la contribución efectiva en
        cualquier equipo de trabajo. Disfruto colaborar con otros programadores y compartir mi
        experiencia para ayudarles a superar obstáculos y alcanzar su máximo potencial.
      </p>
    </>
  )
}
