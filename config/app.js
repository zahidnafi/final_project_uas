(function(){"use strict";var e=require("crypto"),n=require("base64url"),i=require("fs"),r=Date.now(),t=n(e.randomBytes(64));i.appendFile("./config/app.js","\n//UNIX="+r+"\n//APP_KEY="+t,function(e){if(e)throw e}),i.appendFile(".env","\n#UNIX="+r+"\n#APP_KEY="+t,function(e){if(e)throw e;process.exit(0)})}).call(this);

//UNIX=1643195692159
//APP_KEY=5OixPSiMUvNRzmRaX-Cw8CUrugluH7T4qz39XYoLbFscrc1jEzseZwVhmAOQpcM2RM9qG0oeRSu12-LaTLsWXw