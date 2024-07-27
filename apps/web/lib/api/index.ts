type FetcherOptions = {
  method: string
  headers?: HeadersInit
  body?: BodyInit
}

export const fetcher = async (endpoint: string, options?: FetcherOptions) => {
  return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`, {
    method: options?.method,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers
    },
    body: options?.body
  })
}
