// const axios = require('axios').default;
// const core = require('@actions/core');
const github = require('@actions/github');

(async () => {
  // const GITHUB_TOKEN = core.getInput('gitub_token', { required: true });
  // const GITHUB_PROJECT_ID = core.getInput('github_project_id', { required: true });

  const {
    eventName,
    payload,
    issue: {
      number: issueNumber,
    },
    repo: {
      repoOwner,
    },
  } = github.context;

  console.log('github.context: ------------------');
  console.log(github.context);
  console.log('payload: ------------------');
  console.log(payload);

  console.log('other: ------------------');
  console.log({
    eventName,
    issueNumber,
    repoOwner,
  });
})();
