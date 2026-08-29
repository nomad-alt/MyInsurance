import { Link, useParams } from 'react-router-dom'
import Card from '../components/Card'
import { policies } from '../data/policies'
import './InsuranceDetailsPage.css'

const dateFormatter = new Intl.DateTimeFormat('en-GB', {
  dateStyle: 'long',
})

function InsuranceDetailsPage() {
  const { policyId } = useParams()
  const policy = policies.find((item) => item.id === policyId)

  if (!policy) {
    return (
      <section aria-labelledby="policy-not-found-heading">
        <p className="eyebrow">Policy</p>
        <h1 id="policy-not-found-heading">Policy not found</h1>
        <p className="intro">
          We could not find an insurance policy for this address.
        </p>
        <Link className="back-link" to="/">
          Return to dashboard
        </Link>
      </section>
    )
  }

  return (
    <section aria-labelledby="insurance-heading">
      <p className="eyebrow">Policy</p>
      <h1 id="insurance-heading">{policy.name}</h1>
      <p className="intro">Your policy details and current coverage.</p>

      <Card title="Policy overview">
        <dl className="insurance-details">
          <div>
            <dt>Status</dt>
            <dd>{policy.status === 'active' ? 'Active' : 'Expired'}</dd>
          </div>
          <div>
            <dt>Policy number</dt>
            <dd>{policy.policyNumber}</dd>
          </div>
          <div>
            <dt>Coverage</dt>
            <dd>{policy.coverageSummary}</dd>
          </div>
          <div>
            <dt>Renewal date</dt>
            <dd>{dateFormatter.format(new Date(policy.renewalDate))}</dd>
          </div>
        </dl>
      </Card>

      <Link className="back-link" to="/">
        Return to dashboard
      </Link>
    </section>
  )
}

export default InsuranceDetailsPage
