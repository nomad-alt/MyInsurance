export type InsuranceStatus = 'active' | 'expired'

export type InsurancePolicy = {
  id: string
  name: string
  policyNumber: string
  status: InsuranceStatus
  coverageSummary: string
  renewalDate: string
}
