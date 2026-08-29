import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import CreateClaimPage from './CreateClaimPage'

describe('CreateClaimPage', () => {
  it('shows accessible errors when the form is submitted empty', async () => {
    const user = userEvent.setup()
    render(<CreateClaimPage />)

    await user.click(screen.getByRole('button', { name: 'Submit claim' }))

    expect(screen.getByRole('alert')).toHaveTextContent(
      'Check the highlighted fields and try again.',
    )
    expect(screen.getByText('Select an insurance policy.')).toBeInTheDocument()
    expect(screen.getByText('Enter the incident date.')).toBeInTheDocument()
    expect(screen.getByText('Describe what happened.')).toBeInTheDocument()

    expect(screen.getByLabelText('Insurance policy')).toHaveAttribute(
      'aria-invalid',
      'true',
    )
    expect(screen.getByLabelText('Incident date')).toHaveAttribute(
      'aria-invalid',
      'true',
    )
    expect(screen.getByLabelText('What happened?')).toHaveAttribute(
      'aria-invalid',
      'true',
    )
  })
})
