import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="app-header__content">
          <span className="app-name">MyInsurance</span>
        </div>
      </header>

      <main className="app-main">
        <section aria-labelledby="dashboard-heading">
          <p className="eyebrow">Overview</p>
          <h1 id="dashboard-heading">Your insurance</h1>
          <p className="intro">
            View your active insurance policies and manage your claims.
          </p>
        </section>
      </main>
    </div>
  )
}

export default App
