import { Octokit } from '@octokit/rest';

const api = new Octokit({
  userAgent: 'gitApp v1',
  baseUrl: 'https://api.github.com',
});

export default api;
