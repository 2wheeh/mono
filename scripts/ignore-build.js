const { execSync, exec } = require('child_process');

const dependentWorkspaces = [];

execSync('yarn workspaces foreach -ptR run echo:name')
  .toString()
  .split('\n')
  .forEach(workspacePath => {
    if (workspacePath.includes('@mymono')) {
      const workspace = '../' + workspacePath.split('/').pop();

      dependentWorkspaces.push(workspace);
    }
  });

console.log('dependentWorkspaces', dependentWorkspaces);

exec('git diff HEAD^ HEAD --quiet -- ' + dependentWorkspaces.join(' '), error => {
  if (error === null) {
    console.log('No changes in dependent workspaces, skipping build');
    process.exit(0);
  } else if (error.code === 1) {
    console.log('Changes in dependent workspaces, building');
    process.exit(1);
  } else {
    // https://stackoverflow.com/questions/61742500/how-to-get-the-output-of-git-diff-command-in-shell-script
    console.log('Error running git diff: code ' + error.code);
    process.exit(error.code);
  }
});
