// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { getInput, setFailed } from '@actions/core';
import { Logger } from '@dolittle/github-actions.shared.logging';
import { readFile, writeFile } from 'fs';

const logger = new Logger();

run();
export async function run() {
    try {
        const version = getInput('version', { required: true });
        const body = getInput('body', { required: true });
        const prUrl = getInput('pr-url', { required: true });
        const changelogPath = getInput('changelog-path', { required: true });

        logger.info(`Creating new content for changelog with version ${version}`);
        const content = createChangelogContent(body, version, prUrl);

        logger.info(`Writing to path ${changelogPath} with heading ${content[0]} and ${content.length} lines of new content`);
        writeToFile(changelogPath, content);

        logger.info('Write complete');
    } catch (error) {
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
    const heading = `# [${version}] - ${date.getFullYear()}-${date.getMonth()}-${date.getDate()} [PR: #${prNumber}](${prUrl})`;
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
        };
    });
}
