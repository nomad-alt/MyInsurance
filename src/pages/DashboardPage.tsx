import { Link } from 'react-router-dom'
import Card from '../components/Card'
import { policies } from '../data/policies'
import './DashboardPage.css'

const dateFormatter = new Intl.DateTimeFormat('en-GB', {
  dateStyle: 'long',
})

function DashboardPage() {
  const activePolicies = policies.filter((policy) => policy.status === 'active')

  return (
    <section aria-labelledby="dashboard-heading">
      <p className="eyebrow">Overview</p>
      <h1 id="dashboard-heading">Your insurance</h1>
      <p className="intro">
        View your active insurance policies and manage your claims.
      </p>

      <h2 className="section-heading">Active policies</h2>
      <ul className="policy-list">
        {activePolicies.map((policy) => (
          <li key={policy.id}>
            <Card title={policy.name}>
              <dl className="policy-details">
                <div>
                  <dt>Status</dt>
                  <dd>
                    <span className="policy-status">Active</span>
                  </dd>
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
                  <dt>Renews</dt>
                  <dd>{dateFormatter.format(new Date(policy.renewalDate))}</dd>
                </div>
              </dl>
              <Link className="policy-link" to={`/insurance/${policy.id}`}>
                View details
              </Link>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default DashboardPage
