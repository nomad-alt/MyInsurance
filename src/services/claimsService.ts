import { claims as initialClaims } from '../data/claims'
import type { Claim } from '../types/claim'

export type CreateClaimInput = {
  policyId: string
  incidentDate: string
  description: string
}

let claims = [...initialClaims]
let nextClaimSequence = claims.length + 1

export function getClaims(): Claim[] {
  return [...claims]
}

export function createClaim(input: CreateClaimInput): Claim {
  const sequence = nextClaimSequence
  nextClaimSequence += 1

  const newClaim: Claim = {
    id: `claim-${sequence}`,
    claimNumber: `CLM-DEMO-${String(sequence).padStart(3, '0')}`,
    submittedDate: new Date().toISOString().slice(0, 10),
    status: 'submitted',
    ...input,
  }

  claims = [newClaim, ...claims]
  return newClaim
}
