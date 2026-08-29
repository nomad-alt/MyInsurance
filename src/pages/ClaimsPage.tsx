import { Link } from 'react-router-dom'
import Badge, { type BadgeVariant } from '../components/Badge'
import Card from '../components/Card'
import { getClaims } from '../services/claimsService'
import { getPolicyById } from '../services/insuranceService'
import type { ClaimStatus } from '../types/claim'
import './ClaimsPage.css'

const statusLabels: Record<ClaimStatus, string> = {
  submitted: 'Submitted',
  'in-review': 'In review',
  approved: 'Approved',
  rejected: 'Rejected',
}

const statusVariants: Record<ClaimStatus, BadgeVariant> = {
  submitted: 'warning',
  'in-review': 'warning',
  approved: 'success',
  rejected: 'danger',
}

const dateFormatter = new Intl.DateTimeFormat('en-GB', {
  dateStyle: 'long',
})

function ClaimsPage() {
  const claims = getClaims()

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
          const policyName = getPolicyById(claim.policyId)?.name

          return (
            <li key={claim.id}>
              <Card title={claim.claimNumber}>
                <div className="claim-status">
                  <Badge variant={statusVariants[claim.status]}>
                    Status: {statusLabels[claim.status]}
                  </Badge>
                </div>
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
