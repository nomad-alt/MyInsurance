import type { InsurancePolicy } from '../types/insurance'

export const policies: InsurancePolicy[] = [
  {
    id: 'home-1',
    name: 'Home insurance',
    policyNumber: 'HOME-48291',
    status: 'active',
    coverageSummary: 'Apartment and personal belongings',
    renewalDate: '2027-01-15',
  },
  {
    id: 'travel-1',
    name: 'Travel insurance',
    policyNumber: 'TRAVEL-73104',
    status: 'active',
    coverageSummary: 'Worldwide travel for the household',
    renewalDate: '2027-03-01',
  },
  {
    id: 'car-1',
    name: 'Car insurance',
    policyNumber: 'CAR-26518',
    status: 'active',
    coverageSummary: 'Comprehensive vehicle coverage',
    renewalDate: '2027-05-20',
  },
]
