let { AccessAccounts } = require("./Scen2Accounts.js");
commands.rules.stopServer = [
  [
    [],
    function ($, e, t) {
      e.dim.broadcast("Stopping Server");
      console.log("STOPPING SERVER");
      setTimeout(function () {
        console.log("Server Stop");
        process.exit(0);
      }, 5000);
    },
  ],
];
commands.rules.createAccount = [
  [
    ["string", "string"],
    function ($, e, t) {
      if ($[0] === "" || $[1] === undefined || $[1] === "") {
        t.sendPacket("announcement", "2 Arguments Required");
      } else {
        t.sendPacket("announcement", "Creating Account"),
          AccessAccounts.Add([$[0], $[1]])?t.sendPacket("announcement", `Created Account: ${$[0]}`):t.sendPacket("announcement", `Failed To Create Account: ${$[0]}`);
      }
    },
  ],
];
