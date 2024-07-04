const fs = require("fs");
const fetch = require("fetch").fetchUrl;
let { Accounts, CommandAccess, AccessAccounts } = require("./Scen2Accounts.js");
console.log(CommandAccess);
AccessAccounts.Add(["test", "passwordTest"]);
const main = function (scenexe2) {
  let options = {
    parentPort: {
      postMessage: function ($) {
        if ($[0] == "playerCount") {
          BotData[$[0]] = $[1];
        } else console.log($);
      },
    },
    port: 3000,
    testing: 1,
    start: `load('./dim-nahm8.js'), load('./dim-sandbox.js'), load('./commands.js')`,
    //, load('./dim.maze.js')
    secret: {
      p1: "a",
      p2: "b",
      cert: "../secret.cer",
      key: "../secret.key",
    },
    autoAdmin: "*",
    standalone: 1,
  };

  let data = scenexe2.run(options);
  //  data.dimension.dims.ffa.gleaming = 1
  data.____(CommandAccess);
  eval(fs.readFileSync("./DCBot.js", "utf8"));
  let BotData = Object();
  console.log(BotData);
};

Scen2 = fs.readFileSync("./scenexe2.js");
let __module__ = {
  exports: {},
};
let s = Scen2.toString().replace(`module`, `__module__`);
eval(s);
main(__module__.exports);
