export const seo = {
  title: 'lemondy | 开发者、设计师、细节控、创始人',
  description:
    '我叫 lemondy，一名开发者，设计师，细节控',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://lemondy.org'
      : 'http://localhost:3000'
  ),
} as const
