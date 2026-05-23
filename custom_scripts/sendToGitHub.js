/* Custom Script added to React project
    in order to make committing changes easier.
    The script adds, commits, and pushes any and all changes made,
    before opening GitHub on the browser to see the latest commit. */

/* DISCLAIMER: AI was partially used in the creation of this script (Google AI Overview)
    and in verifying that the script works as intended. */

const openBrowser = require('react-dev-utils/openBrowser');

// Root Directory Name
const path = require('path');
const currentDir = __dirname;
const rootDir = path.join(currentDir, '..');

// Git Add, Commit, and Push Setup`
const { execSync } = require('child_process');
const commitMessage = process.argv[2] || 'Automatic Update via Custom JS Script.';

if (process.cwd() !== rootDir) {
    console.error(`Error: This command must be run from the root directory ${rootDir}`);
    console.log(`Current Directory: ${process.cwd()}`);
    process.exit(1);
}

/* Google AI Overview used to Identify execSync
    as the function needed to run terminal commands from a JS Script. */
try {
    console.log('Adding changes...');
    execSync('git add .');
    
    console.log(`Committing with message "${commitMessage}"...`);
    execSync(`git commit -m "${commitMessage}"`)

    console.log('Pushing to remote main branch...');
    execSync('git push origin main');

    console.log('Successfully pushed changes!')
} catch (error) {
    console.error('Git update failed:', error.message);
    process.exit(1);
}

try {
    console.log('Opening GitHub on browser...')
    openBrowser('https://github.com/guimauveAstorDunc/NoobReactMicroblogLessons')
} catch (error) {
    console.log('An unexpected error occurred while trying to open GitHub.')
}