export const seo = {
  title: 'CC | @ccknbc',
  description:
    '我叫 CC ，啥也不是',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://www.ccknbc.cc'
      : 'http://localhost:3000'
  ),
} as const
