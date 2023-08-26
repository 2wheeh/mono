const { execSync, exec } = require('child_process');

const dependantWorkspaces = [];

execSync('yarn workspaces foreach -ptR run echo:name')
  .toString()
  .split('\n')
  .forEach(workspacePath => {
    if (workspacePath.includes('@mymono')) {
      const workspace = '../' + workspacePath.split('/').pop();

      dependantWorkspaces.push(workspace);
    }
  });

console.log('dependantWorkspaces', dependantWorkspaces);

exec('git diff HEAD^ HEAD --quiet -- ' + dependantWorkspaces.join(' '), error => {
  if (error === null) {
    console.log('No changes in dependant workspaces, skipping build');
    process.exit(0);
  } else if (error.code === 1) {
    console.log('Changes in dependant workspaces, building');
    process.exit(1);
  }
});
