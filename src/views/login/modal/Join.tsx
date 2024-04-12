import { apiUser } from '@/services/user';
import { Button, Divider, Form, Input, Modal } from 'antd';
import { useState } from 'react';

interface JoinType {
  cancel: () => void;
}

interface JoinFormType {
  join_user_name: string;
  join_phone_number: string;
  join_user_birth: string;
  join_email: string;
  join_user_id: string;
  join_password: string;
}

const Join = ({ cancel }: JoinType) => {
  const [isConfirmId, setIsConfirmId] = useState(false);
  const [joinForm] = Form.useForm();
  const { info, error } = Modal;

  const handleCheckDupliCated = async () => {
    const user_id = joinForm.getFieldValue('join_user_id');

    try {
      const { data } = await apiUser.getUser(user_id);

      if (data) {
        error({
          title: 'Error',
          content: '이미 존재하는 아이디입니다.',
          okText: '확인',
        });
      } else {
        info({
          title: '완료',
          content: '가입 가능한 아이디입니다.',
          okText: '확인',
        });
        setIsConfirmId(true);
      }
    } catch (e) {
      return console.log(e);
    }
  };

  const onFinish = async (values: JoinFormType) => {
    if (!isConfirmId) {
      return error({
        title: 'Error',
        content: '아이디 중복확인을 해주세요 !',
        okText: '확인',
      });
    }

    const param = {
      user_name: values.join_user_name,
      phone_number: values.join_phone_number,
      user_birth: values.join_user_birth,
      email: values.join_email,
      user_id: values.join_user_id,
      password: values.join_password,
    };

    try {
      await apiUser.join(param);

      info({
        title: '완료',
        content: '회원가입이 완료되었습니다.',
        okText: '확인',
        onOk: () => cancel(),
      });

      joinForm.resetFields();
    } catch (e) {
      error({
        title: 'Error',
        content: '회원가입에 실패하였습니다. 다시 시도 해 주세요.',
        okText: '확인',
      });
      return console.log(e);
    }
  };

  return (
    <Modal
      open={true}
      title="회원가입"
      onCancel={cancel}
      cancelText="취소"
      footer={(_, { CancelBtn }) => (
        <>
          <CancelBtn />
          <Button type="primary" htmlType="submit" onClick={() => joinForm.submit()}>
            회원가입
          </Button>
        </>
      )}
    >
      <Form
        form={joinForm}
        name="join__form"
        layout="vertical"
        className="py-[3rem]"
        onFinish={onFinish}
      >
        <Form.Item
          name="join_user_name"
          label="이름"
          rules={[{ required: true, message: '이름을 입력해주세요.' }]}
        >
          <Input placeholder="이름을 입력해주세요." size="large" />
        </Form.Item>

        <Form.Item
          name="join_phone_number"
          label="휴대폰번호"
          rules={[{ required: true, message: '휴대폰번호를 입력해주세요.' }]}
        >
          <Input placeholder="휴대폰번호를 입력해주세요." size="large" />
        </Form.Item>

        <Form.Item
          name="join_user_birth"
          label="생년월일"
          rules={[{ required: true, message: '생년월일을 입력해주세요.' }]}
        >
          <Input placeholder="생년월일을 입력해주세요. ex) 19001211" size="large" />
        </Form.Item>

        <Form.Item
          name="join_email"
          label="이메일"
          rules={[{ required: true, message: '이메일을 입력해주세요.' }]}
        >
          <Input placeholder="이메일을 입력해주세요." size="large" />
        </Form.Item>

        <Divider />

        <Form.Item
          name="join_user_id"
          label="아이디"
          rules={[{ required: true, message: '아이디를 입력해주세요.' }]}
        >
          <div className="flex">
            <Input placeholder="아이디를 입력해주세요." size="large" />
            <Button
              type="primary"
              size="large"
              className="ml-3"
              onClick={handleCheckDupliCated}
            >
              중복확인
            </Button>
          </div>
        </Form.Item>

        <Form.Item
          name="join_password"
          label="비밀번호"
          rules={[{ required: true, message: '비밀번호를 입력해주세요.' }]}
        >
          <Input.Password
            type="password"
            placeholder="비밀번호를 입력해주세요."
            size="large"
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default Join;
