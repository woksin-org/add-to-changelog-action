# [4.0.1] - 2023-8-11[PR: #2](https://github.com/woksin-org/add-to-changelog-action/pull/2)
## Summary

### Fixed

- Explicitly sets merge as strategy when pulling


# [4.0.0] - 2023-8-11[PR: #1](https://github.com/woksin-org/add-to-changelog-action/pull/1)
## Summary

Simplifies action

### Changed

- `pr-url` is no longer required. It defaults to empty string
- `user-name` and `user-email` is no longer required

### Removed

- `token` input. It was not necessary


# [2.0.6] - 2022-12-7 [PR: #16](https://github.com/dolittle/add-to-changelog-action/pull/16)
## Summary

Update deps and modernise


# [2.0.5] - 2021-8-27 [PR: #15](https://github.com/dolittle/add-to-changelog-action/pull/15)
## Summary

Pull before pushing commit

### Changed

- Does a git pull before git push


# [2.0.4] - 2021-1-29 [PR: #14](https://github.com/dolittle/add-to-changelog-action/pull/14)
## Summary

Added more examples

### Added

- Added example text to README


# [2.0.3] - 2021-1-25 [PR: #13](https://github.com/dolittle/add-to-changelog-action/pull/13)
## Summary

The changelog file should be committed before the release is created in order for the new changelog to be a part of the release.

### Fixed

- Release after changelog is committed


# [2.0.2] - 2021-1-25 [PR: #12](https://github.com/dolittle/add-to-changelog-action/pull/12)
## Summary

Fixes the commit message so that it is the same as before.

### Fixed

- The commit message to be the same as before


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
