import { policies } from '../data/policies'
import type { InsurancePolicy } from '../types/insurance'

export function getActivePolicies(): InsurancePolicy[] {
  return policies.filter((policy) => policy.status === 'active')
}

export function getPolicyById(policyId: string): InsurancePolicy | undefined {
  return policies.find((policy) => policy.id === policyId)
}
