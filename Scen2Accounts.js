const fs = require("node:fs");
const crypto = require("node:crypto");
if (crypto) {
  function EncryptPass($) {
    return crypto.createHash("sha256").update($).digest("hex");
  }
}
let CommandAccess = ["test", "absentpopcorn33"];
let AccountData = JSON.parse(
  fs.readFileSync("./Scen2AccountPass.json", "utf8")
);
function WriteChanges($) {
  fs.writeFileSync("./Scen2AccountPass.json", JSON.stringify($));
}
module.exports = {
  CommandAccess: CommandAccess,
  AccessAccounts: {
    Add: function ($) {
      let fail = true;
      AccountData[$[0].toLowerCase()] = EncryptPass($[1]);
      try {
        WriteChanges(AccountData);
      } catch {
        fail = false;
      }
      console.log(AccountData);
      return fail;
    },
    Login: function ($) {
      return AccountData[$[0].toLowerCase()] === EncryptPass($[1]);
    },
  },
  Accounts: AccountData,
  AccountNames: Object.keys(AccountData)
};
