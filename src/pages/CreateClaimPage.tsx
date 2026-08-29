import { useState, type FormEvent } from 'react'
import { policies } from '../data/policies'
import './CreateClaimPage.css'

type ClaimFormData = {
  policyId: string
  incidentDate: string
  description: string
}

const initialFormData: ClaimFormData = {
  policyId: '',
  incidentDate: '',
  description: '',
}

function CreateClaimPage() {
  const [formData, setFormData] = useState(initialFormData)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitted(true)
  }

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

      <form className="claim-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="policy">Insurance policy</label>
          <select
            id="policy"
            name="policyId"
            value={formData.policyId}
            onChange={(event) => {
              setFormData({ ...formData, policyId: event.target.value })
              setIsSubmitted(false)
            }}
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
        </div>

        <div className="form-field">
          <label htmlFor="incident-date">Incident date</label>
          <input
            id="incident-date"
            name="incidentDate"
            type="date"
            value={formData.incidentDate}
            onChange={(event) => {
              setFormData({ ...formData, incidentDate: event.target.value })
              setIsSubmitted(false)
            }}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="description">What happened?</label>
          <textarea
            id="description"
            name="description"
            rows={6}
            value={formData.description}
            onChange={(event) => {
              setFormData({ ...formData, description: event.target.value })
              setIsSubmitted(false)
            }}
            required
          />
        </div>

        <button className="submit-button" type="submit">
          Submit claim
        </button>
      </form>
    </section>
  )
}

export default CreateClaimPage
