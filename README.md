# Nui Federation SDK

This Frontend SDK connects to the NUI Federation API for getting or creating, revoke, generating batch for NUI from the API.

## Installation

### Package Manager

```sh
npm install nui-federation-sdk
```

# Example

```ts
import NuiFederation from 'nui-federation-sdk'

// Initialize NUIFederation
const baseUrl = 'https://example.com/api'
const apiKey = 'your-api-key'
const clientId = 'your-client-id'
const clientSecret = 'your-client'

const nuiFederation = NuiFederation(baseUrl, apiKey, clientId, clientSecret)

// Example 1: Get or Create UIN
citizenDatas = [
  {
    externalId: '123',
    firstname: 'John',
    lastname: 'Doe',
    dateOfBirth: '2000-01-01',
    birthCertificateId: 'BC123',
    motherName: 'Jane Doe',
  },
]

try {
  const res = await nuiFederation.uin.getOrCreate(citizenDatas)
  console.log('UIN Response:', res)
} catch (err) {
  console.log('Error creating or fetching UIN:', err.message)
}

// Example 2: Revoke a UIN
const uin = '1234567890'
try {
  const res = await nuiFederation.uin.revoke(uin)
  console.log('Revoke UIN Response:', res)
} catch (err) {
  console.log('Error revoking UIN:', err.message)
}

// Example 3: Generate UIN Batch
const count = 5
try {
  const res = await nuiFederation.uin.generateBatch(count)
  console.log('Generate UIN Batch Response:', res)
} catch (err) {
  console.log('Error generating UIN Batch:', err.message)
}
```
