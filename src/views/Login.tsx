import { Button, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const onClickLogin = () => {
    navigate('/main');
  };
  return (
    <section className="login">
      <div className="login__box">
        <h1 className="login__title text-primary">
          <span>Login</span>
        </h1>

        <form className="login__form">
          <Input placeholder="아이디를 입력해주세요." size="large" />
          <Input placeholder="비밀번호를 입력해주세요" size="large" />

          <Button
            className="mt-20"
            type="primary"
            size="large"
            onClick={() => onClickLogin()}
          >
            로그인
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Login;
