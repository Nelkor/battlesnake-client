export const objToQueryString = obj => Object.entries(obj)
  .map(([key, value]) => `${key}=${encodeURIComponent(String(value))}`)
  .join('&')

const formData = (acc, [key, value]) => {
  acc.append(key, value)

  return acc
}

const bodyPack = (body = {}, type) => {
  switch (type) {
    case 'json':
      return JSON.stringify(body)
    case 'form-data':
      return Object.entries(body).reduce(formData, new FormData)
  }
}

/**
 * @param {HttpMethod} fn
 *
 * @return {HttpRequest}
 */
const makeRequest = fn => async (path, params = {}) => {
  try {
    const res = await fn(`/api/${path}`, params)

    return res.success
      ? [null, res.data]
      : [res.reason, null]
  } catch (e) {
    return ['net', null]
  }
}

/** @type HttpMethod */
const getFn = async (url, params) => {
  const qs = objToQueryString(params)

  return (await fetch(url + (qs && `?${qs}`))).json()
}

/** @type HttpMethod */
const postFn = async (url, params) => {
  const { body, query = {}, type = 'json' } = params
  const qs = objToQueryString(query)
  const options = { method: 'POST', body: bodyPack(body, type) }

  return (await fetch(url + (qs && `?${qs}`), options)).json()
}

export const get = makeRequest(getFn)
export const post = makeRequest(postFn)
