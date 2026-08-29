import { useState, type FormEvent } from 'react'
import { policies } from '../data/policies'
import './CreateClaimPage.css'

type ClaimFormData = {
  policyId: string
  incidentDate: string
  description: string
}

type ClaimFormErrors = Partial<Record<keyof ClaimFormData, string>>

const initialFormData: ClaimFormData = {
  policyId: '',
  incidentDate: '',
  description: '',
}

function validateForm(formData: ClaimFormData) {
  const errors: ClaimFormErrors = {}

  if (!formData.policyId) {
    errors.policyId = 'Select an insurance policy.'
  }

  if (!formData.incidentDate) {
    errors.incidentDate = 'Enter the incident date.'
  }

  if (!formData.description.trim()) {
    errors.description = 'Describe what happened.'
  } else if (formData.description.trim().length < 20) {
    errors.description = 'Enter at least 20 characters.'
  }

  return errors
}

function CreateClaimPage() {
  const [formData, setFormData] = useState(initialFormData)
  const [errors, setErrors] = useState<ClaimFormErrors>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const validationErrors = validateForm(formData)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      setIsSubmitted(false)
      return
    }

    setIsSubmitted(true)
  }

  const updateField = (field: keyof ClaimFormData, value: string) => {
    setFormData({ ...formData, [field]: value })
    setErrors({ ...errors, [field]: undefined })
    setIsSubmitted(false)
  }

  const hasErrors = Object.values(errors).some(Boolean)

  return (
    <section aria-labelledby="create-claim-heading">
      <p className="eyebrow">New case</p>
      <h1 id="create-claim-heading">Create a claim</h1>
      <p className="intro">
        Tell us which policy is affected and what happened.
      </p>

      {isSubmitted && (
        <p className="claim-confirmation" role="status">
          Your claim has been received in this demo.
        </p>
      )}

      {hasErrors && (
        <div className="error-summary" role="alert">
          <p>Check the highlighted fields and try again.</p>
        </div>
      )}

      <form className="claim-form" onSubmit={handleSubmit} noValidate>
        <div className="form-field">
          <label htmlFor="policy">Insurance policy</label>
          <select
            id="policy"
            name="policyId"
            value={formData.policyId}
            onChange={(event) => updateField('policyId', event.target.value)}
            aria-invalid={Boolean(errors.policyId)}
            aria-describedby={errors.policyId ? 'policy-error' : undefined}
            required
          >
            <option value="">Select a policy</option>
            {policies
              .filter((policy) => policy.status === 'active')
              .map((policy) => (
                <option key={policy.id} value={policy.id}>
                  {policy.name} ({policy.policyNumber})
                </option>
              ))}
          </select>
          {errors.policyId && (
            <p className="field-error" id="policy-error">
              {errors.policyId}
            </p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="incident-date">Incident date</label>
          <input
            id="incident-date"
            name="incidentDate"
            type="date"
            value={formData.incidentDate}
            onChange={(event) =>
              updateField('incidentDate', event.target.value)
            }
            aria-invalid={Boolean(errors.incidentDate)}
            aria-describedby={
              errors.incidentDate ? 'incident-date-error' : undefined
            }
            required
          />
          {errors.incidentDate && (
            <p className="field-error" id="incident-date-error">
              {errors.incidentDate}
            </p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="description">What happened?</label>
          <textarea
            id="description"
            name="description"
            rows={6}
            value={formData.description}
            onChange={(event) => updateField('description', event.target.value)}
            aria-invalid={Boolean(errors.description)}
            aria-describedby={
              errors.description ? 'description-error' : undefined
            }
            required
          />
          {errors.description && (
            <p className="field-error" id="description-error">
              {errors.description}
            </p>
          )}
        </div>

        <button className="submit-button" type="submit">
          Submit claim
        </button>
      </form>
    </section>
  )
}

export default CreateClaimPage
