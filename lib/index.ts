export function url(path = '') {
  const baseUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://www.ccknbc.cc'
      : 'http://localhost:3000'

  return new URL(path, baseUrl)
}
