import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import ClaimsPage from './pages/ClaimsPage'
import CreateClaimPage from './pages/CreateClaimPage'
import DashboardPage from './pages/DashboardPage'
import InsuranceDetailsPage from './pages/InsuranceDetailsPage'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="app-header__content">
          <Link className="app-name" to="/">
            MyInsurance
          </Link>
          <nav aria-label="Main navigation">
            <ul className="navigation-list">
              <li>
                <Link to="/">Dashboard</Link>
              </li>
              <li>
                <Link to="/claims">Claims</Link>
              </li>
              <li>
                <Link to="/claims/new">Create claim</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="app-main">
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route
            path="/insurance/:policyId"
            element={<InsuranceDetailsPage />}
          />
          <Route path="/claims" element={<ClaimsPage />} />
          <Route path="/claims/new" element={<CreateClaimPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
