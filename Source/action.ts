// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import path from 'path';
import { getInput, setFailed } from '@actions/core';
import { exec } from '@actions/exec';
import * as github from '@actions/github';
import { Logger } from '@dolittle/github-actions.shared.logging';
import { readFile, writeFile } from 'fs';

const logger = new Logger();

run();

/**
 * Runs the action.
 */
export async function run() {
    try {
        const version = getInput('version', { required: true });
        const body = getInput('body', { required: true });
        const prUrl = getInput('pr-url', { required: true });
        const changelogPath = getInput('changelog-path', { required: true });
        const userEmail = getInput('user-email', { required: true });
        const userName = getInput('user-name', { required: true });
        const token = getInput('token', { required: true });
        const mergeStrategy = getInput('merge-strategy', { required: false }) || 'merge';

        logger.info(`Creating new content for changelog with version ${version}`);
        const content = createChangelogContent(body, version, prUrl);

        logger.info(`Writing to path ${changelogPath} with heading ${content[0]} and ${content.length} lines of new content`);
        writeToFile(changelogPath, content);
        logger.info('Write complete');
        await configureUser(userEmail, userName);
        await configurePull(mergeStrategy)
        await commitChangelog(changelogPath, version);
        await pushChanges();

    } catch (error: any) {
        fail(error);
    }
}

function fail(error: Error) {
    logger.error(error.message);
    setFailed(error.message);
}

function createChangelogContent(body: string, version: string, prUrl: string): string[] {
    const date = new Date(new Date().toUTCString());
    const prNumber = prUrl.slice(prUrl.indexOf('pull/')).match(/\d+$/);
    const heading = `# [${version}] - ${date.getUTCFullYear()}-${date.getUTCMonth() + 1}-${date.getUTCDate()} [PR: #${prNumber}](${prUrl})`;
    const splitBody = body.split('\n');
    return [heading, ...splitBody, '\n'];
}

function writeToFile(filePath: string, content: string[]) {
    readFile(filePath, { flag: 'a+' }, (err, data) => {
        if (err) fail(err);
        const oldContent = data.toString().split('\n');
        oldContent.unshift(...content);
        const newContent = oldContent.join('\n');
        writeFile(filePath, newContent, (err) => {
            if (err) fail(new Error(err.message));
        });
    });
}

async function configureUser(userEmail: string, userName: string) {
    logger.info(`Configuring user with email '${userEmail}' and name '${userName}'`);
    await exec(
        'git config',
        [
            'user.email',
            `"${userEmail}"`
        ],
        { ignoreReturnCode: true });
    await exec(
        'git config',
        [
            'user.name',
            `"${userName}"`
        ],
        { ignoreReturnCode: true });
}
async function commitChangelog(changelogPath: string, version: string) {
    logger.info(`Adding and committing ${changelogPath}`);
    await exec(
        'git add',
        [changelogPath],
        { ignoreReturnCode: true });
    await exec(
        'git commit',
        [
            `-m "Add version ${version} to changelog"`
        ],
        { ignoreReturnCode: true });
}


async function configurePull(mergeStrategy: string) {
    logger.info(`Configure git pull as '${mergeStrategy}'`);
    switch (mergeStrategy) {
        case 'rebase':
            await exec(
                'git config',
                [
                    'pull.rebase',
                    'true'
                ]
            );
            break;
        case 'fast-forward':
            await exec(
                'git config',
                [
                    'pull.ff',
                    'only'
                ]
            );
            break;
        case 'merge':
            await exec(
                'git config',
                [
                    'pull.rebase',
                    'false'
                ]
            );
            break;
        default:
            await exec(
                'git config',
                [
                    'pull.rebase',
                    'false'
                ]
            );
    }
}

async function pushChanges() {
    const branchName = path.basename(github.context.ref);
    logger.info(`Pushing changelog to origin ${branchName}`);
    await exec('git pull origin', [branchName]);
    await exec('git push origin', [branchName]);
}