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
        props.selected ? 'font-normal' : ''
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
    <div className="flex bg-[#262626cc] md:bg-[#D9D9D966] py-2 px-6 md:rounded-lg gap-6 font-light">
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
