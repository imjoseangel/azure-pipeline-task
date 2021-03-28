import tl = require('azure-pipelines-task-lib/task');
import tr = require('azure-pipelines-task-lib/toolrunner');

const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function run() {
    try {
        let inputString = tl.getInput('flag', true);
        //const inputString: string | undefined = tl.getInput('flag', true);

        console.log('========================== Starting Command Output ===========================');

        let ansiblePath: string = tl.which('ansible', true);
        const { stdout, stderr } = await exec(ansiblePath + ' -ilocahost, -m debug -a msg=' + inputString + ' localhost');

        console.log('stdout:', stdout.trim());
        console.log('stderr:', stderr.trim());

    } catch (err) {
        tl.setResult(tl.TaskResult.Failed, err.message);
    };
};

run();
