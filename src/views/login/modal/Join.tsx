import { Button, Divider, Form, Input, Modal } from 'antd';
// import { apiUser } from '@/services/user';

interface JoinType {
  cancel: () => void;
}

const Join = ({ cancel }: JoinType) => {
  const [form] = Form.useForm();
  // const [form_instance] = Form.useFormInstance();

  // form_instance.submit = () => {
  //   console.log('submit!');
  // };

  const handleOk = () => {};

  // const handleJoin = async () => {
  //   try {
  //     const params = {
  //       user_name: name,
  //       phone_number: phone,
  //       user_birth: birth,
  //       email,
  //       user_id: id,
  //       password: password,
  //     };
  //     const result = await apiUser.join(params);
  //   } catch (e) {
  //     console.log(e);
  //   } finally {
  //     cancel();
  //   }
  // };

  const handleCheckDupiCated = () => {
    console.log('duplicated');
  };

  const onFinish = (values: any) => {
    console.log('Finish:', values);
    console.log(form);
  };

  return (
    <Modal
      open={true}
      title="회원가입"
      onOk={onFinish}
      okText="확인"
      onCancel={cancel}
      cancelText="취소"
      footer={(_, { /*OkBtn,*/ CancelBtn }) => (
        <>
          <CancelBtn />

          {/* <OkBtn /> */}
          <Button type="primary" htmlType="submit" onClick={handleCheckDupiCated}>
            회원가입
          </Button>
        </>
      )}
    >
      <Form
        form={form}
        name="horizontal_login"
        layout="vertical"
        className="py-[3rem]"
        onFinish={onFinish}
      >
        <Form.Item
          name="name"
          label="이름"
          rules={[{ required: true, message: '이름을 입력해주세요.' }]}
        >
          <Input placeholder="이름을 입력해주세요." size="large" />
        </Form.Item>

        <Form.Item
          name="phone"
          label="휴대폰번호"
          rules={[{ required: true, message: '휴대폰번호를 입력해주세요.' }]}
        >
          <Input placeholder="휴대폰번호를 입력해주세요." size="large" />
        </Form.Item>

        <Form.Item
          name="birth"
          label="생년월일"
          rules={[{ required: true, message: '생년월일을 입력해주세요.' }]}
        >
          <Input placeholder="생년월일을 입력해주세요." size="large" />
        </Form.Item>

        <Form.Item
          name="eamil"
          label="이메일"
          rules={[{ required: true, message: '이메일을 입력해주세요.' }]}
        >
          <Input placeholder="이메일을 입력해주세요." size="large" />
        </Form.Item>

        <Divider />

        <Form.Item
          name="id"
          label="아이디"
          rules={[{ required: true, message: '아이디를 입력해주세요.' }]}
        >
          <div className="flex">
            <Input placeholder="아이디를 입력해주세요." size="large" />
            <Button
              type="primary"
              size="large"
              className="ml-3"
              onClick={handleCheckDupiCated}
            >
              중복확인
            </Button>
          </div>
        </Form.Item>

        <Form.Item
          name="password"
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
