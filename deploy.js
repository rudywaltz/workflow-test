const { exec } = require("child_process");


function getLatestTag() {
  exec('git describe --abbrev=0 --tag',(error, stdout, stderr) => {
    console.log('fetch', error, stderr)

    if(stdout) {
      stdout.toString()
      // const qqq = `git log --graph --pretty='\''%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset'\ `
      exec(`git log --graph --pretty='\''%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset'\  ...${stdout.toString()}`,(error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: `)
        console.log(stdout)
      });
    }
  })
}

getLatestTag()
