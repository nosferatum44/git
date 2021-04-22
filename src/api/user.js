import api from './init';

export const getUser = async (username) =>
  await api.rest.users.getByUsername({
    username: username,
  });
