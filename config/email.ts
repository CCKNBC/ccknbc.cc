export const emailConfig = {
  from: 'cc@ccknbc.cc',
  baseUrl:
    process.env.VERCEL_ENV === 'production'
      ? `https://www.ccknbc.cc`
      : 'http://localhost:3000',
}
