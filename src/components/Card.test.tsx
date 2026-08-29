import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Card from './Card'

describe('Card', () => {
  it('renders its title and child content', () => {
    render(
      <Card title="Home insurance">
        <p>Apartment and personal belongings</p>
      </Card>,
    )

    expect(
      screen.getByRole('heading', { name: 'Home insurance' }),
    ).toBeInTheDocument()
    expect(
      screen.getByText('Apartment and personal belongings'),
    ).toBeInTheDocument()
  })
})
