import tl = require('azure-pipelines-task-lib/task');

const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function run() {
    try {
        const inputString: string | undefined = tl.getInput('flag', true);
        const { stdout, stderr } = await exec('ls ', inputString);
        console.log('stdout:', stdout);
        console.log('stderr:', stderr);
    } catch (err) {
        tl.setResult(tl.TaskResult.Failed, err.message);
    };
};

run();
