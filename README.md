# GitHub Action - Add To Changelog
This GitHub action prepends the release note from the PR body to a changelog markdown file. It then commits and pushes the file.

### Inputs
- `version`: The version released
- `body`: The main text to add to the changelog
- `pr-url`: URL to the PR that resulted in the release
- `changelog-path`: Path to the CHANGELOG.md file. Defaults to `CHANGELOG.md` in repo root.
- `user-email`: The email of the user that should commit the CHANGELOG
- `user-name`: The name of the user that should commit the CHANGELOG

### Example Workflow
```yaml
on:
  pull_request:
    types: [closed]

name: GitHub action workflow name

jobs:
  context:
    name: Job name
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2

    # this outputs the PR body
    - name: Establish context
      id: context
      uses: woksin-org/establish-context-action@v4

    - name: Prepend to Changelog
      if: ${{ steps.context.outputs.should-publish == 'true' }}
      uses: woksin-org/add-to-changelog-action@v2
      with:
        version: ${{ steps.increment-version.outputs.next-version }}
        # input for the text to prepend to
        body: ${{ steps.context.outputs.pr-body }}
        pr-url: ${{ steps.context.outputs.pr-url }}

    - name: Create GitHub Release
      if: ${{ steps.context.outputs.should-publish == 'true' }}
      uses: woksin-org/github-release-action@v2
      with:
        version: ${{ steps.increment-version.outputs.next-version }}
        body: ${{ steps.context.outputs.pr-body }}
        token: ${{ secrets.BUILD_PAT }}
```

## Contributing
We're always open for contributions and bug fixes!

### Pre requisites
node <= 12
yarn
git
