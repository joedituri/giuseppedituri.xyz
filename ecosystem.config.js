module.exports = {
  apps: [
    {
      name: "giuseppedituri.xyz",
      cwd: "./",
      script: "npm",
      args: "run dev",
      watch: false,        // Next.js hot reload handles this — no need for PM2 to watch
      autorestart: true,   // restart if the process crashes
      env: {
        NODE_ENV: "development",
      },
    },

    // To add more apps, copy the block above and change name, cwd, and port.
    // Example:
    // {
    //   name: "another-app",
    //   cwd: "/path/to/another-app",
    //   script: "npm",
    //   args: "run dev",
    //   watch: false,
    //   autorestart: true,
    //   env: {
    //     NODE_ENV: "development",
    //   },
    // },
  ],
};
