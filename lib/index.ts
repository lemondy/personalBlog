export function url(path = '') {
  const baseUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://lemondy.org'
      : 'http://localhost:3000'

  return new URL(path, baseUrl)
}
