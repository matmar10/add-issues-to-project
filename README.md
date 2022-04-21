# Add Issues to Project (Github Action

Github action to automatically add all issues to the specified project board.

## Installation

NOTE: GITHUB_TOKEN will not have sufficient privalege to write organization project, hence personal access token is needed.

1. Create a personal access token with `org:write` permission
2. Add `.github/workflows/action.yml` example (see below)
3. Merge your changes to master (won't run until you do this)
4. Create/edit/reopen issues and enjoy the magic!

## Example Workflow

```yaml
name: Issue Automation
on:
  issues:
    types: [ opened, edited, reopened ]
jobs:
  add-to-project-board:
    name: Add issue to project board
    runs-on: ubuntu-latest
    steps:
      - name: Add new issues to project board
        uses: matmar10/add-issues-to-project@master
        with:
          gitub_token: ${{ secrets.GITHUB_TOKEN_2 }}
          github_project_title: Your Github Project Board's Title
          github_org: your-org-name

```

## Testing Locally

### Pre-Requisites

1. [`nektos/act` framework installed](https://github.com/nektos/act)
2. Create a personal access token having `org:write` permission

### Set Up

1. `git clone https://github.com/matmar10/add-issues-to-project.git` to clone this repo
2. `cd add-issues-to-project`
3. `npm install` to install node deps
4. Create a `.secrets` file with `GITHUB_TOKEN_2` set to secret created in Pre-Requisites step #2
5. Run `npm run test`



