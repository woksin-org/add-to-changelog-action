# [2.0.1] - 2021-1-25 [PR: #11](https://github.com/dolittle/add-to-changelog-action/pull/11)
## Summary

Fixes the 'token' input in the action.yml configuration

### Fixed

- Changed 'token' default value to '${{ github.token }}'

# [2.0.0] - 2021-1-25 [PR: #10](https://github.com/dolittle/add-to-changelog-action/pull/10)
## Summary

This action now also commits and pushes the changelog file to the branch it's committed to.

This is a breaking change because it adds new required inputs.

### Added

- 'user-name' input for configuring git user.name
- 'user-email' input for configuring git user.email
- 'token' input used as the token that pushes the changes. (Not actually in use yet)
- This action now commits and pushes the changed changelog to the branch that correlates to 'context.ref' 

### Changed

- README
- Workflow so that it uses the new inputs of this action

# [1.0.4] - 2021-1-25 [PR: #9](https://github.com/dolittle/add-to-changelog-action/pull/9)
## Summary

Fixed month bug

### Fixed

- Fixed month to be more human readable so add + 1 to the 0 based month number


# [1.0.3] - 2021-0-25 [PR: #8](https://github.com/dolittle/add-to-changelog-action/pull/8)
## Summary

Fix bug that the old changelog would get truncated when opened

### Fixed

- Fix bug that when opened the old changelog got truncated


# [1.0.2] - 2021-0-25 [PR: #7](https://github.com/dolittle/add-to-changelog-action/pull/7)
## Summary

Fix the read flag

### Fixed

- The flag when opening a file didn't have it specified as readable so this fixes that

# [1.0.0] - 2021-0-25 [PR: #5](https://github.com/dolittle/add-to-changelog-action/pull/5)
## Summary

Releases v1

### Added

- v1

# [0.1.3] - 2021-0-25 [PR: #4](https://github.com/dolittle/add-to-changelog-action/pull/4)
## Summary

Fix date on PR text
### Fixed
- Fix pr dates again

# [0.1.2] - function getFullYear() { [native code] }-function getMonth() { [native code] }-function getDate() { [native code] } [PR: 3](https://github.com/dolittle/add-to-changelog-action/pull/3)
## Summary
Fixes the PR link (hopefully)
### Fixed
- Merging PR link was displaying in its entirety, tries to fix it by making it a link

# [0.1.1] - 2021-0-25 (PR: https://github.com/dolittle/add-to-changelog-action/pull/2)
## Summary
This version fixes the wrong date function calls
### Fixed
- Fixes the date format calls to get the correct info to the changelog

Initial test
