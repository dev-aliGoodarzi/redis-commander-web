const { spawn } = require("child_process");

const port = process.env.PORT || 8081;
const address = process.env.ADDRESS || "127.0.0.1"; // or "0.0.0.0" => LOCAL IP :)
const redisHost = process.env.REDIS_HOST || "127.0.0.1";
const redisPort = process.env.REDIS_PORT || "6379";

const httpUser = process.env.HTTP_USER;
const httpPass = process.env.HTTP_PASSWORD;

const args = [
  require.resolve("redis-commander/bin/redis-commander.js"),
  "--address",
  address,
  "--port",
  String(port),
  "--redis-host",
  redisHost,
  "--redis-port",
  String(redisPort),
];

if (httpUser) args.push("--http-auth-username", httpUser);
if (httpPass) args.push("--http-auth-password", httpPass);

const child = spawn(process.execPath, args, { stdio: "inherit" });

child.on("close", (code) => console.log(`redis-commander exited with ${code}`));
