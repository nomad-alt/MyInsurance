import type { ReactNode } from 'react'
import './Card.css'

type CardProps = {
  title: string
  children: ReactNode
}

function Card({ title, children }: CardProps) {
  return (
    <article className="card">
      <h2 className="card__title">{title}</h2>
      <div className="card__content">{children}</div>
    </article>
  )
}

export default Card
