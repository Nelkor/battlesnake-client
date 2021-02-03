import { objToQueryString } from '@net/http'

describe('http', () => {
  test('objToQueryString', () => {
    expect(objToQueryString({ name: 'Rob', age: '20' }))
      .toBe('name=Rob&age=20')
  })
})
