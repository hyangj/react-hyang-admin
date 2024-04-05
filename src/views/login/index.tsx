import { Button, Input } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Join from './modal/Join';

const Login = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const [isOpenJoin, setIsOpenJoin] = useState(false);

  const onClickLogin = () => {
    navigate('/main');
    console.log('id : ', id);
    console.log('pw : ', password);
    // navigate('/main');
  };
  return (
    <>
      <section className="login">
        <div className="login__box">
          <h1 className="login__title text-primary">
            <span>Login</span>
          </h1>

          <form className="login__form">
            <Input
              placeholder="아이디를 입력해주세요."
              size="large"
              onChange={({ target }) => setId(target.value)}
              value={id}
            />
            <Input.Password
              placeholder="비밀번호를 입력해주세요"
              size="large"
              onChange={({ target }) => setPassword(target.value)}
              value={password}
            />

            <div className="login__description">
              <span className="login__description-item">아이디 찾기</span>
              <span className="login__description-item">비밀번호 찾기</span>
              <span
                className="login__description-item"
                onClick={() => setIsOpenJoin(true)}
              >
                회원가입
              </span>
            </div>

            <Button
              className="mt-10"
              type="primary"
              size="large"
              onClick={() => onClickLogin()}
            >
              로그인
            </Button>
          </form>
        </div>
      </section>

      {isOpenJoin && <Join cancel={() => setIsOpenJoin(false)} />}
    </>
  );
};

export default Login;
