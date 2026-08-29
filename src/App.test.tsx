import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('claim submission flow', () => {
  it('shows a submitted claim in the claims list', async () => {
    const user = userEvent.setup()
    const description = 'A pipe leaked and damaged the bedroom floor.'

    render(
      <MemoryRouter initialEntries={['/claims/new']}>
        <App />
      </MemoryRouter>,
    )

    await user.selectOptions(screen.getByLabelText('Insurance policy'), 'home-1')
    await user.type(screen.getByLabelText('Incident date'), '2026-08-15')
    await user.type(screen.getByLabelText('What happened?'), description)
    await user.click(screen.getByRole('button', { name: 'Submit claim' }))
    await user.click(screen.getByRole('link', { name: 'Claims' }))

    expect(screen.getByText(description)).toBeInTheDocument()
    expect(screen.getByText('Status: Submitted')).toBeInTheDocument()
  })
})
