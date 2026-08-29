import type { Claim } from '../types/claim'

export const claims: Claim[] = [
  {
    id: 'claim-1',
    claimNumber: 'CLM-10482',
    policyId: 'home-1',
    incidentDate: '2026-06-12',
    submittedDate: '2026-06-13',
    description: 'Water damage beneath the kitchen sink',
    status: 'in-review',
  },
  {
    id: 'claim-2',
    claimNumber: 'CLM-09317',
    policyId: 'travel-1',
    incidentDate: '2026-02-08',
    submittedDate: '2026-02-10',
    description: 'Delayed baggage during an international trip',
    status: 'approved',
  },
  {
    id: 'claim-3',
    claimNumber: 'CLM-08754',
    policyId: 'car-1',
    incidentDate: '2025-11-21',
    submittedDate: '2025-11-22',
    description: 'Damage to the rear bumper while parked',
    status: 'rejected',
  },
]
