import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

app.use('*', cors())

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.post('/api/login', async (c) => {
  const { id, password } = await c.req.json()

  if (id === 'a' && password === 'b') {
    return c.json({ success: true, message: 'ログイン成功' })
  } else {
    return c.json({ success: false, message: 'IDまたはパスワードが間違っています' }, 401)
  }
})

export default app
