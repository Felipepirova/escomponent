import { MouseEvent, ReactElement, useRef, useState } from 'react'
import { Container } from './styles'

interface BallomTipProps {
  children: ReactElement
  text: string
}

export function BallomTip({ children, text }: BallomTipProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [tooltipX, setTooltipX] = useState(0)
  const [tooltipY, setTooltipY] = useState(0)

  function onMouseMove(event: MouseEvent) {
    const container = containerRef.current
    const containerPosX = container!.offsetLeft
    const containerPosY = container!.offsetTop
    const mouseX = event.pageX
    const mouseY = event.pageY

    const x = mouseX - containerPosX - 60
    const y = mouseY - containerPosY + 30

    setTooltipX(x)
    setTooltipY(y)
  }

  return (
    <Container onMouseMove={onMouseMove} ref={containerRef}>
      {children}
      <span id="spanid" style={{ top: tooltipY, left: tooltipX }}>
        {text}
      </span>
    </Container>
  )
}
