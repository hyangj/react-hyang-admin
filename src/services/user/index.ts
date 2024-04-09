import service from '../index';

export const apiUser = {
  getUserList: async () => {
    return await service({
      method: 'get',
      url: '/user',
    });
  },
  // 유저 정보 및 아이디 중복 확인
  getUser: async (id: string) => {
    return await service({
      method: 'get',
      url: `/user/${id}`,
    });
  },

  // 회원가입
  join: async (params = {}) => {
    return await service({
      method: 'post',
      url: '/user/join',
      data: params,
    });
  },

  // ======= 테스트용 =======
  // 회원가입
  tJoin: async (params = {}) => {
    return await service({
      method: 'post',
      url: '/user/test/join',
      data: params,
    });
  },

  // 비밀번호 암호화
  bcrypt: async () => {
    return await service({
      method: 'get',
      url: '/user/test/hyanghyang',
    });
  },
};
