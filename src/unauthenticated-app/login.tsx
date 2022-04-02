import { useAuth } from 'context/auth-context'
import { Form, Input, Button } from 'antd'

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

export const LoginScreen = () => {
  const { login, user } = useAuth()

  // HTMLFormElement extends Element
  const handleSubmit = (values: { username: string; password: string }) => {
    login(values)
  }

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        name={'username'}
        rules={[{ required: true, message: '请输入用户名' }]}
      >
        <Input placeholder="用户名" type="text" id="username" />
      </Form.Item>
      <Form.Item
        name={'password'}
        rules={[{ required: true, message: '请输入密码' }]}
      >
        <Input placeholder="密码" type="password" id="password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          登录
        </Button>
      </Form.Item>
    </Form>
  )
}
