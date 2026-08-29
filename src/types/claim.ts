export type ClaimStatus = 'submitted' | 'in-review' | 'approved' | 'rejected'

export type Claim = {
  id: string
  claimNumber: string
  policyId: string
  incidentDate: string
  submittedDate: string
  description: string
  status: ClaimStatus
}
