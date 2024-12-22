import { Form, Input, Button, Typography } from 'antd'
import type { FormProps } from 'antd'

const { Title } = Typography
const { TextArea } = Input

type FieldType = {
  name?: string
  email?: string
  message?: string
}

const ContactUs = () => {
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values)
  }

  return (
    <div className="contact-section">
      <Title level={2}>聯絡我們</Title>
      <Form
        name="contact"
        onFinish={onFinish}
        layout="vertical"
        style={{ maxWidth: 600, margin: '0 auto' }}
      >
        <Form.Item<FieldType>
          name="name"
          rules={[{ required: true, message: '請輸入您的姓名' }]}
        >
          <Input placeholder="姓名" />
        </Form.Item>

        <Form.Item<FieldType>
          name="email"
          rules={[
            { required: true, message: '請輸入您的電子郵件' },
            { type: 'email', message: '請輸入有效的電子郵件地址' }
          ]}
        >
          <Input placeholder="電子郵件" />
        </Form.Item>

        <Form.Item<FieldType>
          name="message"
          rules={[{ required: true, message: '請輸入訊息內容' }]}
        >
          <TextArea rows={4} placeholder="訊息內容" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            送出
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default ContactUs 