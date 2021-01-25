# GitHub Action - Add To Changelog
![Github JavaScript Actions CI/CD](https://github.com/dolittle/add-to-changelog-action/workflows/Github%20JavaScript%20Actions%20CI/CD/badge.svg)

This GitHub action prepends the release note from the PR body to the CHANGELOG.md file

### Inputs
- `version`: The version released
- `body`: The main text to add to the changelog
- `pr-url`: URL to the PR that resulted in the release
- `changelog-path`: Path to the CHANGELOG.md file. Defaults to `CHANGELOG.md` in repo root.

### Example Workflow
```yaml
on:
  push:
    branches:
    - '**'
  pull_request:
    types: [closed]

name: GitHub action workflow name

jobs:
  context:
    name: Job name
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Setup node v12
      uses: actions/setup-node@v1
      with:
        node-version: 12.x
    - run: yarn
    - run: yarn release

    - name: Establish context
      id: context
      uses: dolittle/establish-context-action@v2

    - name: Increment version
      id: increment-version
      if: ${{ steps.context.outputs.should-publish == 'true' }}
      uses: dolittle/increment-version-action@v2
      with:
        version: ${{ steps.context.outputs.current-version }}
        release-type: ${{ steps.context.outputs.release-type }}

    - name: Create GitHub Release
      if: ${{ steps.context.outputs.should-publish == 'true' }}
      uses: dolittle/github-release-action@v2
      with:
        token: ${{  secrets.BUILD_PAT  }}
        version: ${{ steps.increment-version.outputs.next-version }}
        body: ${{ steps.context.outputs.pr-body }}

    - name: Prepend to Changelog
      if: ${{ steps.context.outputs.should-publish == 'true' }}
      uses: ./
      with:
        version: ${{ steps.increment-version.outputs.next-version }}
        body: ${{ steps.context.outputs.pr-body }}
        pr-url: ${{ steps.context.outputs.pr-url }}
        changelog-path: CHANGELOG.md

    - name: Commit changelog
      if: ${{ steps.context.outputs.should-publish == 'true' }}
      run: |
        git config --local user.email "build@dolittle.com"
        git config --local user.name "dolittle-build"
        git add CHANGELOG.md
        git commit -m "Add version ${{ steps.increment-version.outputs.next-version }} to changelog"

    - name: Push changes
      if: ${{ steps.context.outputs.should-publish == 'true' }}
      uses: ad-m/github-push-action@master
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        branch: 'master'
```

## Contributing
We're always open for contributions and bug fixes!

### Pre requisites
node <= 12
yarn
git
