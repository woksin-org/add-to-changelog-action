// Copyright (c) woksin-org. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import path from 'path';
import { getInput, setFailed } from '@actions/core';
import * as github from '@actions/github';
import { Logger } from '@woksin/github-actions.shared.logging';
import { safeCommitAndPush } from '@woksin/github-actions.shared.git';
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
        const prUrl = getInput('pr-url', { required: false });
        const changelogPath = getInput('changelog-path', { required: false });
        const userEmail = getInput('user-email', { required: false });
        const userName = getInput('user-name', { required: false });
        const headerPrefix = getInput('header-prefix', { required: false });
        logger.info(`Creating new content for changelog with version ${version}`);
        const content = createChangelogContent(body, version, prUrl, headerPrefix);
        logger.info(`Writing to path ${changelogPath} with heading ${content[0]} and ${content.length} lines of new content`);
        writeToFile(changelogPath, content);
        logger.info('Write complete');
        await safeCommitAndPush(logger, {
            userName,
            userEmail,
            branch: path.basename(github.context.ref),
            commitMessage: `Add version ${version} to changelog`,
            files: [changelogPath]});

    } catch (error: any) {
        fail(error);
    }
}

function fail(error: Error) {
    logger.error(error.message);
    setFailed(error.message);
}

function createChangelogContent(body: string, version: string, prUrl: string, headerPrefix: string): string[] {
    const date = new Date(new Date().toUTCString());
    let heading = `${headerPrefix} [${version}] - ${date.getUTCFullYear()}-${date.getUTCMonth() + 1}-${date.getUTCDate()}`;
    if (prUrl) {
        const prNumber = prUrl.slice(prUrl.indexOf('pull/')).match(/\d+$/);
        heading += `[PR: #${prNumber}](${prUrl})`;
    }

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
