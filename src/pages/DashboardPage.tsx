import Card from '../components/Card'

function DashboardPage() {
  return (
    <section aria-labelledby="dashboard-heading">
      <p className="eyebrow">Overview</p>
      <h1 id="dashboard-heading">Your insurance</h1>
      <p className="intro">
        View your active insurance policies and manage your claims.
      </p>

      <Card title="Active policies">
        <p>Your policy information will be shown here.</p>
      </Card>
    </section>
  )
}

export default DashboardPage
