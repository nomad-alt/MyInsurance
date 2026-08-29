import { Link } from 'react-router-dom'
import Card from '../components/Card'
import { claims } from '../data/claims'
import { policies } from '../data/policies'
import type { ClaimStatus } from '../types/claim'
import './ClaimsPage.css'

const statusLabels: Record<ClaimStatus, string> = {
  submitted: 'Submitted',
  'in-review': 'In review',
  approved: 'Approved',
  rejected: 'Rejected',
}

const dateFormatter = new Intl.DateTimeFormat('en-GB', {
  dateStyle: 'long',
})

function ClaimsPage() {
  return (
    <section aria-labelledby="claims-heading">
      <p className="eyebrow">Your cases</p>
      <h1 id="claims-heading">Claims</h1>
      <p className="intro">Follow the progress of your submitted claims.</p>

      <Link className="create-claim-link" to="/claims/new">
        Create a claim
      </Link>

      <ul className="claim-list">
        {claims.map((claim) => {
          const policyName = policies.find(
            (policy) => policy.id === claim.policyId,
          )?.name

          return (
            <li key={claim.id}>
              <Card title={claim.claimNumber}>
                <p className={`claim-status claim-status--${claim.status}`}>
                  Status: {statusLabels[claim.status]}
                </p>
                <p className="claim-description">{claim.description}</p>
                <dl className="claim-details">
                  <div>
                    <dt>Policy</dt>
                    <dd>{policyName ?? 'Unknown policy'}</dd>
                  </div>
                  <div>
                    <dt>Incident date</dt>
                    <dd>
                      {dateFormatter.format(new Date(claim.incidentDate))}
                    </dd>
                  </div>
                  <div>
                    <dt>Submitted</dt>
                    <dd>
                      {dateFormatter.format(new Date(claim.submittedDate))}
                    </dd>
                  </div>
                </dl>
              </Card>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default ClaimsPage
