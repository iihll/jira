import { useAuth } from 'context/auth-context'
import { FormEvent } from 'react'

// interface Base {
//   id: number
// }

// interface Advance extends Base {
//   name: string
// }

// const test = (p: Base) => {}

// 鸭子类型(duck typing)：面向接口编程 而不是面向对象编程
// const a: Advance = { id: 1, name: 'jack' }
// const a = { id: 1, name: 'jack' }
// test(a)

const apiUrl = process.env.REACT_APP_API_URL

export const LoginScreen = () => {
  const { login, user } = useAuth()

  // HTMLFormElement extends Element
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const username = (event.currentTarget.elements[0] as HTMLInputElement).value
    const password = (event.currentTarget.elements[1] as HTMLInputElement).value
    login({
      username,
      password,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      {user ? (
        <div>
          <div>username: {user.name}</div>
          <div>token: {user.token}</div>
        </div>
      ) : null}
      <div>
        <label htmlFor="username">用户名</label>
        <input type="text" id="username" />
      </div>
      <div>
        <label htmlFor="password">密码</label>
        <input type="password" id="password" />
      </div>
      <button type="submit">登录</button>
    </form>
  )
}
