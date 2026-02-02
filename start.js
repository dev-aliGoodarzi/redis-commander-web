const { spawn } = require("child_process");

const npm = spawn("npm", ["run", "start"], {
  cwd: __dirname, // 👈 important
  stdio: "inherit", // shows logs in your terminal
  shell: true, // helps on Linux/Windows
});

npm.on("close", (code) => {
  console.log(`npm process exited with code ${code}`);
});
