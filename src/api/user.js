import api from './init';

export const getUser = async (username) =>
  await api.get(`/users/${username}`, {
    username: 'username',
  });
