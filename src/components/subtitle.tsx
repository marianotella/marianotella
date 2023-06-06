interface SubtitleProps {
  children: React.ReactNode
  extraClass?: string
}

export const Subtitle = (props: SubtitleProps) => {
  return <h2 className={`text-center text-4xl uppercase ${props?.extraClass}`}>{props.children}</h2>
}
