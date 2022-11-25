import {  defineConfig } from 'tinacms'

const branch =
  process.env.NEXT_PUBLIC_TINA_BRANCH ||
  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD

export default defineConfig({
  token: process.env.NEXT_PUBLIC_TINA_TOKEN, // generated on app.tina.io,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID, // generated on app.tina.io
  branch,
  schema: {
    // ...
  },
})