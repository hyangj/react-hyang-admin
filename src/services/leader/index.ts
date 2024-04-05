import service from '../index';

export const apiLeader = {
  getAngry: async () => {
    return await service({
      method: 'get',
      url: '/leader/angry',
    });
  },
  postAngry: async (params = {}) => {
    return await service({
      method: 'post',
      url: '/leader/angry',
      data: params,
    });
  },
};
