import { useState } from 'react'

interface MenuButton {
  name: string
  onClick: () => void
}

interface MenuButtonProps {
  children: React.ReactNode
  selected: true | false
  onClick: () => void
}

const scrollIntoView = (element: string) => {
  const $element = document.getElementById(element)
  $element?.scrollIntoView({ behavior: 'smooth' })
}

const MENU_BUTTONS: MenuButton[] = [
  {
    name: 'INICIO',
    onClick: () => scrollIntoView('start'),
  },
  {
    name: 'SOBRE MI',
    onClick: () => scrollIntoView('about-me'),
  },
  {
    name: 'STACK',
    onClick: () => scrollIntoView('stack'),
  },
  {
    name: 'CONTACTO',
    onClick: () => scrollIntoView('contact'),
  },
]

const MenuButton = (props: MenuButtonProps) => {
  return (
    <div
      className={`cursor-pointer hover:transition-all hover:scale-110 ${
        props.selected ? 'font-normal text-secondary' : ''
      }`}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  )
}

export const Menu = () => {
  const [selected, setSelected] = useState(0)

  return (
    <div className="flex bg-[#1a324e] py-4 gap-6 font-light justify-center rounded-t-3xl md:bg-[#D9D9D966] md:py-2 px-6 md:rounded-lg">
      {MENU_BUTTONS.map((button, index) => (
        <MenuButton
          key={`button-${index}`}
          selected={index === selected}
          onClick={() => {
            button.onClick()
            setSelected(index)
          }}
        >
          {button.name}
        </MenuButton>
      ))}
    </div>
  )
}
