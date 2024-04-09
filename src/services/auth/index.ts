import service from '../index';

export const apiAuth = {
  login: async (params = {}) => {
    return await service({
      method: 'post',
      url: '/auth/login',
      data: params,
    });
  },
};
