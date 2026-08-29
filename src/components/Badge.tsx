import type { ReactNode } from 'react'
import './Badge.css'

export type BadgeVariant = 'success' | 'warning' | 'danger'

type BadgeProps = {
  variant: BadgeVariant
  children: ReactNode
}

function Badge({ variant, children }: BadgeProps) {
  return <span className={`badge badge--${variant}`}>{children}</span>
}

export default Badge
