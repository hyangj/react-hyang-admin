import service from '../index';

export const apiMenu = {
  get: async () => {
    return await service({
      method: 'get',
      url: '/menu',
    });
  },
};
