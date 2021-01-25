module.exports =
/******/ (function(modules, runtime) { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	__webpack_require__.ab = __dirname + "/";
/******/
/******/ 	// the startup function
/******/ 	function startup() {
/******/ 		// Load entry module and return exports
/******/ 		return __webpack_require__(57);
/******/ 	};
/******/
/******/ 	// run startup
/******/ 	return startup();
/******/ })
/************************************************************************/
/******/ ({

/***/ 57:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const core_1 = __webpack_require__(470);
const github_actions_shared_logging_1 = __webpack_require__(83);
const fs_1 = __webpack_require__(747);
const logger = new github_actions_shared_logging_1.Logger();
run();
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const version = core_1.getInput('version', { required: true });
            const body = core_1.getInput('body', { required: true });
            const prUrl = core_1.getInput('pr-url', { required: true });
            const changelogPath = core_1.getInput('changelog-path', { required: true });
            logger.info(`Creating new content for changelog with version ${version}`);
            const content = createChangelogContent(body, version, prUrl);
            logger.info(`Writing to path ${changelogPath} with heading ${content[0]} and ${content.length} lines of new content`);
            writeToFile(changelogPath, content);
            logger.info('Write complete');
        }
        catch (error) {
            fail(error);
        }
    });
}
exports.run = run;
function fail(error) {
    logger.error(error.message);
    core_1.setFailed(error.message);
}
function createChangelogContent(body, version, prUrl) {
    const date = new Date(new Date().toUTCString());
    const prNumber = prUrl.slice(prUrl.indexOf('pull/')).match(/\d+$/);
    const heading = `# [${version}] - ${date.getUTCFullYear()}-${date.getUTCMonth() + 1}-${date.getUTCDate()} [PR: #${prNumber}](${prUrl})`;
    const splitBody = body.split('\n');
    return [heading, ...splitBody, '\n'];
}
function writeToFile(filePath, content) {
    fs_1.readFile(filePath, { flag: 'a+' }, (err, data) => {
        if (err)
            fail(err);
        const oldContent = data.toString().split('\n');
        oldContent.unshift(...content);
        const newContent = oldContent.join('\n');
        fs_1.writeFile(filePath, newContent, (err) => {
            if (err)
                fail(new Error(err.message));
        });
    });
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QztRQUMvQyxVQUFVLENBQUMsT0FBTyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUM7UUFDL0IsTUFBTSxVQUFVLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QyxjQUFTLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ3BDLElBQUksR0FBRztnQkFBRSxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMiLCJmaWxlIjoiYWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBEb2xpdHRsZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS4gU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IGdldElucHV0LCBzZXRGYWlsZWQgfSBmcm9tICdAYWN0aW9ucy9jb3JlJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJ0Bkb2xpdHRsZS9naXRodWItYWN0aW9ucy5zaGFyZWQubG9nZ2luZyc7XG5pbXBvcnQgeyByZWFkRmlsZSwgd3JpdGVGaWxlIH0gZnJvbSAnZnMnO1xuXG5jb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyKCk7XG5cbnJ1bigpO1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJ1bigpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB2ZXJzaW9uID0gZ2V0SW5wdXQoJ3ZlcnNpb24nLCB7IHJlcXVpcmVkOiB0cnVlIH0pO1xuICAgICAgICBjb25zdCBib2R5ID0gZ2V0SW5wdXQoJ2JvZHknLCB7IHJlcXVpcmVkOiB0cnVlIH0pO1xuICAgICAgICBjb25zdCBwclVybCA9IGdldElucHV0KCdwci11cmwnLCB7IHJlcXVpcmVkOiB0cnVlIH0pO1xuICAgICAgICBjb25zdCBjaGFuZ2Vsb2dQYXRoID0gZ2V0SW5wdXQoJ2NoYW5nZWxvZy1wYXRoJywgeyByZXF1aXJlZDogdHJ1ZSB9KTtcblxuICAgICAgICBsb2dnZXIuaW5mbyhgQ3JlYXRpbmcgbmV3IGNvbnRlbnQgZm9yIGNoYW5nZWxvZyB3aXRoIHZlcnNpb24gJHt2ZXJzaW9ufWApO1xuICAgICAgICBjb25zdCBjb250ZW50ID0gY3JlYXRlQ2hhbmdlbG9nQ29udGVudChib2R5LCB2ZXJzaW9uLCBwclVybCk7XG5cbiAgICAgICAgbG9nZ2VyLmluZm8oYFdyaXRpbmcgdG8gcGF0aCAke2NoYW5nZWxvZ1BhdGh9IHdpdGggaGVhZGluZyAke2NvbnRlbnRbMF19IGFuZCAke2NvbnRlbnQubGVuZ3RofSBsaW5lcyBvZiBuZXcgY29udGVudGApO1xuICAgICAgICB3cml0ZVRvRmlsZShjaGFuZ2Vsb2dQYXRoLCBjb250ZW50KTtcblxuICAgICAgICBsb2dnZXIuaW5mbygnV3JpdGUgY29tcGxldGUnKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBmYWlsKGVycm9yKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGZhaWwoZXJyb3I6IEVycm9yKSB7XG4gICAgbG9nZ2VyLmVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgIHNldEZhaWxlZChlcnJvci5tZXNzYWdlKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ2hhbmdlbG9nQ29udGVudChib2R5OiBzdHJpbmcsIHZlcnNpb246IHN0cmluZywgcHJVcmw6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUobmV3IERhdGUoKS50b1VUQ1N0cmluZygpKTtcbiAgICBjb25zdCBwck51bWJlciA9IHByVXJsLnNsaWNlKHByVXJsLmluZGV4T2YoJ3B1bGwvJykpLm1hdGNoKC9cXGQrJC8pO1xuICAgIGNvbnN0IGhlYWRpbmcgPSBgIyBbJHt2ZXJzaW9ufV0gLSAke2RhdGUuZ2V0VVRDRnVsbFllYXIoKX0tJHtkYXRlLmdldFVUQ01vbnRoKCkgKyAxfS0ke2RhdGUuZ2V0VVRDRGF0ZSgpfSBbUFI6ICMke3ByTnVtYmVyfV0oJHtwclVybH0pYDtcbiAgICBjb25zdCBzcGxpdEJvZHkgPSBib2R5LnNwbGl0KCdcXG4nKTtcbiAgICByZXR1cm4gW2hlYWRpbmcsIC4uLnNwbGl0Qm9keSwgJ1xcbiddO1xufVxuXG5mdW5jdGlvbiB3cml0ZVRvRmlsZShmaWxlUGF0aDogc3RyaW5nLCBjb250ZW50OiBzdHJpbmdbXSkge1xuICAgIHJlYWRGaWxlKGZpbGVQYXRoLCB7IGZsYWc6ICdhKycgfSwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICBpZiAoZXJyKSBmYWlsKGVycik7XG4gICAgICAgIGNvbnN0IG9sZENvbnRlbnQgPSBkYXRhLnRvU3RyaW5nKCkuc3BsaXQoJ1xcbicpO1xuICAgICAgICBvbGRDb250ZW50LnVuc2hpZnQoLi4uY29udGVudCk7XG4gICAgICAgIGNvbnN0IG5ld0NvbnRlbnQgPSBvbGRDb250ZW50LmpvaW4oJ1xcbicpO1xuICAgICAgICB3cml0ZUZpbGUoZmlsZVBhdGgsIG5ld0NvbnRlbnQsIChlcnIpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIGZhaWwobmV3IEVycm9yKGVyci5tZXNzYWdlKSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuIl19


/***/ }),

/***/ 82:
/***/ (function(__unusedmodule, exports) {

"use strict";

// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Sanitizes an input into a string so it can be passed into issueCommand safely
 * @param input input to sanitize into a string
 */
function toCommandValue(input) {
    if (input === null || input === undefined) {
        return '';
    }
    else if (typeof input === 'string' || input instanceof String) {
        return input;
    }
    return JSON.stringify(input);
}
exports.toCommandValue = toCommandValue;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 83:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(641), exports);
__exportStar(__webpack_require__(138), exports);
__exportStar(__webpack_require__(810), exports);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7O2dHQUdnRzs7Ozs7Ozs7Ozs7O0FBRWhHLDRDQUEwQjtBQUMxQiwyQ0FBeUI7QUFDekIsK0NBQTZCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIERvbGl0dGxlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5leHBvcnQgKiBmcm9tICcuL0lMb2dnZXInO1xuZXhwb3J0ICogZnJvbSAnLi9Mb2dnZXInO1xuZXhwb3J0ICogZnJvbSAnLi9OdWxsTG9nZ2VyJztcbiJdfQ==


/***/ }),

/***/ 87:
/***/ (function(module) {

module.exports = require("os");

/***/ }),

/***/ 102:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

// For internal use, subject to change.
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
const fs = __importStar(__webpack_require__(747));
const os = __importStar(__webpack_require__(87));
const utils_1 = __webpack_require__(82);
function issueCommand(command, message) {
    const filePath = process.env[`GITHUB_${command}`];
    if (!filePath) {
        throw new Error(`Unable to find environment variable for file command ${command}`);
    }
    if (!fs.existsSync(filePath)) {
        throw new Error(`Missing file at path: ${filePath}`);
    }
    fs.appendFileSync(filePath, `${utils_1.toCommandValue(message)}${os.EOL}`, {
        encoding: 'utf8'
    });
}
exports.issueCommand = issueCommand;
//# sourceMappingURL=file-command.js.map

/***/ }),

/***/ 138:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const core = __importStar(__webpack_require__(470));
/**
 * Represents an implementation of {ILogger} that logs messages to the Azure DevOps pipeline
 *
 * @export
 * @class Logger
 * @implements {ILogger}
 */
class Logger {
    /**
     * @inheritdoc
     */
    debug(message) {
        core.debug(message);
    }
    /**
     * @inheritdoc
     */
    warning(message) {
        core.warning(message);
    }
    /**
     * @inheritdoc
     */
    error(message) {
        core.error(message);
    }
    /**
     * @inheritdoc
     */
    info(message) {
        core.info(message);
    }
}
exports.Logger = Logger;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0Esb0RBQXNDO0FBRXRDOzs7Ozs7R0FNRztBQUNILE1BQWEsTUFBTTtJQUVmOztPQUVHO0lBQ0gsS0FBSyxDQUFDLE9BQWU7UUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxPQUFPLENBQUMsT0FBZTtRQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRDs7T0FFRztJQUNILEtBQUssQ0FBQyxPQUFlO1FBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBSSxDQUFDLE9BQWU7UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QixDQUFDO0NBQ0o7QUE3QkQsd0JBNkJDIiwiZmlsZSI6IkxvZ2dlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBEb2xpdHRsZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmltcG9ydCB7IElMb2dnZXIgfSBmcm9tICcuL0lMb2dnZXInO1xuaW1wb3J0ICogYXMgY29yZSBmcm9tICdAYWN0aW9ucy9jb3JlJztcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIGltcGxlbWVudGF0aW9uIG9mIHtJTG9nZ2VyfSB0aGF0IGxvZ3MgbWVzc2FnZXMgdG8gdGhlIEF6dXJlIERldk9wcyBwaXBlbGluZVxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBMb2dnZXJcbiAqIEBpbXBsZW1lbnRzIHtJTG9nZ2VyfVxuICovXG5leHBvcnQgY2xhc3MgTG9nZ2VyIGltcGxlbWVudHMgSUxvZ2dlciB7XG5cbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdGRvY1xuICAgICAqL1xuICAgIGRlYnVnKG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICBjb3JlLmRlYnVnKG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBpbmhlcml0ZG9jXG4gICAgICovXG4gICAgd2FybmluZyhtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgY29yZS53YXJuaW5nKG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBpbmhlcml0ZG9jXG4gICAgICovXG4gICAgZXJyb3IobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIGNvcmUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGluaGVyaXRkb2NcbiAgICAgKi9cbiAgICBpbmZvKG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICBjb3JlLmluZm8obWVzc2FnZSk7XG4gICAgfVxufVxuIl19


/***/ }),

/***/ 431:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const os = __importStar(__webpack_require__(87));
const utils_1 = __webpack_require__(82);
/**
 * Commands
 *
 * Command Format:
 *   ::name key=value,key=value::message
 *
 * Examples:
 *   ::warning::This is the message
 *   ::set-env name=MY_VAR::some value
 */
function issueCommand(command, properties, message) {
    const cmd = new Command(command, properties, message);
    process.stdout.write(cmd.toString() + os.EOL);
}
exports.issueCommand = issueCommand;
function issue(name, message = '') {
    issueCommand(name, {}, message);
}
exports.issue = issue;
const CMD_STRING = '::';
class Command {
    constructor(command, properties, message) {
        if (!command) {
            command = 'missing.command';
        }
        this.command = command;
        this.properties = properties;
        this.message = message;
    }
    toString() {
        let cmdStr = CMD_STRING + this.command;
        if (this.properties && Object.keys(this.properties).length > 0) {
            cmdStr += ' ';
            let first = true;
            for (const key in this.properties) {
                if (this.properties.hasOwnProperty(key)) {
                    const val = this.properties[key];
                    if (val) {
                        if (first) {
                            first = false;
                        }
                        else {
                            cmdStr += ',';
                        }
                        cmdStr += `${key}=${escapeProperty(val)}`;
                    }
                }
            }
        }
        cmdStr += `${CMD_STRING}${escapeData(this.message)}`;
        return cmdStr;
    }
}
function escapeData(s) {
    return utils_1.toCommandValue(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A');
}
function escapeProperty(s) {
    return utils_1.toCommandValue(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A')
        .replace(/:/g, '%3A')
        .replace(/,/g, '%2C');
}
//# sourceMappingURL=command.js.map

/***/ }),

/***/ 470:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = __webpack_require__(431);
const file_command_1 = __webpack_require__(102);
const utils_1 = __webpack_require__(82);
const os = __importStar(__webpack_require__(87));
const path = __importStar(__webpack_require__(622));
/**
 * The code to exit an action
 */
var ExitCode;
(function (ExitCode) {
    /**
     * A code indicating that the action was successful
     */
    ExitCode[ExitCode["Success"] = 0] = "Success";
    /**
     * A code indicating that the action was a failure
     */
    ExitCode[ExitCode["Failure"] = 1] = "Failure";
})(ExitCode = exports.ExitCode || (exports.ExitCode = {}));
//-----------------------------------------------------------------------
// Variables
//-----------------------------------------------------------------------
/**
 * Sets env variable for this action and future actions in the job
 * @param name the name of the variable to set
 * @param val the value of the variable. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function exportVariable(name, val) {
    const convertedVal = utils_1.toCommandValue(val);
    process.env[name] = convertedVal;
    const filePath = process.env['GITHUB_ENV'] || '';
    if (filePath) {
        const delimiter = '_GitHubActionsFileCommandDelimeter_';
        const commandValue = `${name}<<${delimiter}${os.EOL}${convertedVal}${os.EOL}${delimiter}`;
        file_command_1.issueCommand('ENV', commandValue);
    }
    else {
        command_1.issueCommand('set-env', { name }, convertedVal);
    }
}
exports.exportVariable = exportVariable;
/**
 * Registers a secret which will get masked from logs
 * @param secret value of the secret
 */
function setSecret(secret) {
    command_1.issueCommand('add-mask', {}, secret);
}
exports.setSecret = setSecret;
/**
 * Prepends inputPath to the PATH (for this action and future actions)
 * @param inputPath
 */
function addPath(inputPath) {
    const filePath = process.env['GITHUB_PATH'] || '';
    if (filePath) {
        file_command_1.issueCommand('PATH', inputPath);
    }
    else {
        command_1.issueCommand('add-path', {}, inputPath);
    }
    process.env['PATH'] = `${inputPath}${path.delimiter}${process.env['PATH']}`;
}
exports.addPath = addPath;
/**
 * Gets the value of an input.  The value is also trimmed.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string
 */
function getInput(name, options) {
    const val = process.env[`INPUT_${name.replace(/ /g, '_').toUpperCase()}`] || '';
    if (options && options.required && !val) {
        throw new Error(`Input required and not supplied: ${name}`);
    }
    return val.trim();
}
exports.getInput = getInput;
/**
 * Sets the value of an output.
 *
 * @param     name     name of the output to set
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function setOutput(name, value) {
    command_1.issueCommand('set-output', { name }, value);
}
exports.setOutput = setOutput;
/**
 * Enables or disables the echoing of commands into stdout for the rest of the step.
 * Echoing is disabled by default if ACTIONS_STEP_DEBUG is not set.
 *
 */
function setCommandEcho(enabled) {
    command_1.issue('echo', enabled ? 'on' : 'off');
}
exports.setCommandEcho = setCommandEcho;
//-----------------------------------------------------------------------
// Results
//-----------------------------------------------------------------------
/**
 * Sets the action status to failed.
 * When the action exits it will be with an exit code of 1
 * @param message add error issue message
 */
function setFailed(message) {
    process.exitCode = ExitCode.Failure;
    error(message);
}
exports.setFailed = setFailed;
//-----------------------------------------------------------------------
// Logging Commands
//-----------------------------------------------------------------------
/**
 * Gets whether Actions Step Debug is on or not
 */
function isDebug() {
    return process.env['RUNNER_DEBUG'] === '1';
}
exports.isDebug = isDebug;
/**
 * Writes debug message to user log
 * @param message debug message
 */
function debug(message) {
    command_1.issueCommand('debug', {}, message);
}
exports.debug = debug;
/**
 * Adds an error issue
 * @param message error issue message. Errors will be converted to string via toString()
 */
function error(message) {
    command_1.issue('error', message instanceof Error ? message.toString() : message);
}
exports.error = error;
/**
 * Adds an warning issue
 * @param message warning issue message. Errors will be converted to string via toString()
 */
function warning(message) {
    command_1.issue('warning', message instanceof Error ? message.toString() : message);
}
exports.warning = warning;
/**
 * Writes info to log with console.log.
 * @param message info message
 */
function info(message) {
    process.stdout.write(message + os.EOL);
}
exports.info = info;
/**
 * Begin an output group.
 *
 * Output until the next `groupEnd` will be foldable in this group
 *
 * @param name The name of the output group
 */
function startGroup(name) {
    command_1.issue('group', name);
}
exports.startGroup = startGroup;
/**
 * End an output group.
 */
function endGroup() {
    command_1.issue('endgroup');
}
exports.endGroup = endGroup;
/**
 * Wrap an asynchronous function call in a group.
 *
 * Returns the same type as the function itself.
 *
 * @param name The name of the group
 * @param fn The function to wrap in the group
 */
function group(name, fn) {
    return __awaiter(this, void 0, void 0, function* () {
        startGroup(name);
        let result;
        try {
            result = yield fn();
        }
        finally {
            endGroup();
        }
        return result;
    });
}
exports.group = group;
//-----------------------------------------------------------------------
// Wrapper action state
//-----------------------------------------------------------------------
/**
 * Saves state for current action, the state can only be retrieved by this action's post job execution.
 *
 * @param     name     name of the state to store
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function saveState(name, value) {
    command_1.issueCommand('save-state', { name }, value);
}
exports.saveState = saveState;
/**
 * Gets the value of an state set by this action's main execution.
 *
 * @param     name     name of the state to get
 * @returns   string
 */
function getState(name) {
    return process.env[`STATE_${name}`] || '';
}
exports.getState = getState;
//# sourceMappingURL=core.js.map

/***/ }),

/***/ 622:
/***/ (function(module) {

module.exports = require("path");

/***/ }),

/***/ 641:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklMb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJJTG9nZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIERvbGl0dGxlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLyoqXG4gKiBEZWZpbmVzIGEgc3lzdGVtIHRoYXQgY2FuIGxvZyBtZXNzYWdlc1xuICpcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgSUxvZ2dlclxuICovXG5leHBvcnQgaW50ZXJmYWNlIElMb2dnZXIge1xuXG4gICAgLyoqXG4gICAgICogTG9ncyBhIGRlYnVnZ2luZyBtZXNzYWdlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxuICAgICAqL1xuICAgIGRlYnVnKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQ7XG5cbiAgICAvKipcbiAgICAgKiBMb2dzIGEgd2FybmluZyBtZXNzYWdlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxuICAgICAqL1xuICAgIHdhcm5pbmcobWVzc2FnZTogc3RyaW5nKTogdm9pZDtcblxuICAgIC8qKlxuICAgICAqIExvZ3MgYW4gZXJyb3IgbWVzc2FnZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VcbiAgICAgKi9cbiAgICBlcnJvcihtZXNzYWdlOiBzdHJpbmcpOiB2b2lkO1xuXG4gICAgLyoqXG4gICAgICogTG9ncyB0aGUgaW5mbyBtZXNzYWdlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxuICAgICAqL1xuICAgIGluZm8obWVzc2FnZTogc3RyaW5nKTogdm9pZFxuXG59XG4iXX0=


/***/ }),

/***/ 747:
/***/ (function(module) {

module.exports = require("fs");

/***/ }),

/***/ 810:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NullLogger = void 0;
/**
 * Represents a null-implementation of {ILogger}
 *
 * @export
 * @class NullLogger
 * @implements {ILogger}
 */
class NullLogger {
    // tslint:disable-next-line: no-empty
    /**
     * @inheritdoc
     */
    debug(message) { }
    // tslint:disable-next-line: no-empty
    /**
     * @inheritdoc
     */
    warning(message) { }
    // tslint:disable-next-line: no-empty
    /**
     * @inheritdoc
     */
    error(message) { }
    // tslint:disable-next-line: no-empty
    /**
     * @inheritdoc
     */
    info(message) { }
}
exports.NullLogger = NullLogger;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk51bGxMb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBTUE7Ozs7OztHQU1HO0FBQ0gsTUFBYSxVQUFVO0lBRW5CLHFDQUFxQztJQUNyQzs7T0FFRztJQUNILEtBQUssQ0FBQyxPQUFlLElBQUksQ0FBQztJQUUxQixxQ0FBcUM7SUFDckM7O09BRUc7SUFDSCxPQUFPLENBQUMsT0FBZSxJQUFJLENBQUM7SUFFNUIscUNBQXFDO0lBQ3JDOztPQUVHO0lBQ0gsS0FBSyxDQUFDLE9BQWUsSUFBSSxDQUFDO0lBRTFCLHFDQUFxQztJQUNyQzs7T0FFRztJQUNILElBQUksQ0FBQyxPQUFlLElBQUksQ0FBQztDQUU1QjtBQTFCRCxnQ0EwQkMiLCJmaWxlIjoiTnVsbExvZ2dlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBEb2xpdHRsZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmltcG9ydCB7IElMb2dnZXIgfSBmcm9tICcuL0lMb2dnZXInO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBudWxsLWltcGxlbWVudGF0aW9uIG9mIHtJTG9nZ2VyfVxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBOdWxsTG9nZ2VyXG4gKiBAaW1wbGVtZW50cyB7SUxvZ2dlcn1cbiAqL1xuZXhwb3J0IGNsYXNzIE51bGxMb2dnZXIgaW1wbGVtZW50cyBJTG9nZ2VyIHtcblxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tZW1wdHlcbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdGRvY1xuICAgICAqL1xuICAgIGRlYnVnKG1lc3NhZ2U6IHN0cmluZykgeyB9XG5cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWVtcHR5XG4gICAgLyoqXG4gICAgICogQGluaGVyaXRkb2NcbiAgICAgKi9cbiAgICB3YXJuaW5nKG1lc3NhZ2U6IHN0cmluZykgeyB9XG5cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWVtcHR5XG4gICAgLyoqXG4gICAgICogQGluaGVyaXRkb2NcbiAgICAgKi9cbiAgICBlcnJvcihtZXNzYWdlOiBzdHJpbmcpIHsgfVxuXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1lbXB0eVxuICAgIC8qKlxuICAgICAqIEBpbmhlcml0ZG9jXG4gICAgICovXG4gICAgaW5mbyhtZXNzYWdlOiBzdHJpbmcpIHsgfVxuXG59XG4iXX0=


/***/ })

/******/ });