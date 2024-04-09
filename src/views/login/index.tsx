import login from '@/utils/auth.tsx';
import { Button, Form, Input, Modal } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Join from './modal/Join';

const Login = () => {
  const navigate = useNavigate();

  const [form] = Form.useForm();
  const { error } = Modal;

  const [isOpenJoin, setIsOpenJoin] = useState(false);

  const handleLogin = (values: { user_id: string; password: string }) => {
    login(values).then((result) => {
      if (result) {
        navigate('/main');
      } else {
        error({
          title: 'Error',
          content: '아이디 또는 비밀번호를 확인해 주세요.',
          okText: '확인',
        });
      }
    });
  };
  return (
    <>
      <section className="login">
        <div className="login__box">
          <h1 className="login__title text-primary">
            <span>Login</span>
          </h1>

          <Form
            form={form}
            name="horizontal_login"
            layout="vertical"
            className="login__form"
            onFinish={handleLogin}
          >
            <Form.Item
              name="user_id"
              rules={[{ required: true, message: '아이디를 입력해주세요.' }]}
            >
              <Input placeholder="아이디를 입력해주세요." size="large" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: '비밀번호를 입력해주세요.' }]}
            >
              <Input.Password placeholder="비밀번호를 입력해주세요." size="large" />
            </Form.Item>

            <Form.Item className="login__description">
              <span className="login__description-item">아이디 찾기</span>
              <span className="login__description-item">비밀번호 찾기</span>
              <span
                className="login__description-item"
                onClick={() => setIsOpenJoin(true)}
              >
                회원가입
              </span>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" size="large" className="w-full">
                로그인
              </Button>
            </Form.Item>
          </Form>
        </div>
      </section>

      {isOpenJoin && <Join cancel={() => setIsOpenJoin(false)} />}
    </>
  );
};

export default Login;
