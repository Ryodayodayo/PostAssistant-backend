import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

app.use('*', cors())

// テスト用ユーザーデータ
const users = [
  { id: 'ryo', password: 'dayo'},
  { id: 'user1', password: '1'},
  { id: 'user2', password: '2'},
  { id: 'user3', password: '3'}
]

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.post('/api/login', async (c) => {
  const { id, password } = await c.req.json()

  const user = users.find(element => element.id === id && element.password === password)

  if (user) {
    return c.json({ 

      success: true, 
      message: 'ログイン成功',
      userId: user.id, 

    }, 200)

  } else {
    return c.json({ success: false, message: 'IDまたはパスワードが間違っています' }, 401)
  } 

})

export default app
