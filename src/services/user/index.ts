import service from '../index';

export const apiUser = {
  // getAngry: async () => {
  //   return await service({
  //     method: 'get',
  //     url: '/leader/angry',
  //   });
  // },
  join: async (params = {}) => {
    return await service({
      method: 'post',
      url: '/user',
      data: params,
    });
  },
};
