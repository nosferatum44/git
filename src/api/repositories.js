import api from './init';

export const getRepositories = async (username) =>
  await api.get(`/users/${username}/repos`);

export const getCommits = async (username, repo) =>
  await api.get(`/repos/${username}/${repo}/commits`);
