const fs=require("fs"),{html:html,css:css,help:help}=require("./exports");let tailwind=!1;function cli(o){o.forEach((o=>{switch(o){case"-site":case"--create-site":fs.mkdirSync("images",(function(o){o&&console.log("Zmat-cli: Error"),console.log("create images ...")})),fs.mkdirSync("fonts",(function(o){o&&console.log("Zmat-cli: Error"),console.log("create fonts ...")})),fs.mkdirSync("js",(function(o){o&&console.log("Zmat-cli: Error"),console.log("create js ...")})),fs.writeFile("./js/index.js","/* created by zmat-cli */",(function(o){o&&console.log("Zmat-cli: Error"),console.log("create index.js ...")})),fs.mkdirSync("css",(function(o){o&&console.log("Zmat-cli: Error"),console.log("create css")})),fs.writeFile("./css/style.css",css,(function(o){o&&console.log("Zmat-cli: Error"),console.log("create style.css")})),fs.writeFile("./index.html",html,(function(o){o&&console.log("Zmat-cli: Error"),console.log("create index.html and link files")}));break;case"-v":case"--version":console.log("Zmat-cli: 0.1.0 Version");break;case"-h":case"--hlep":default:console.log(help);break;case"-t":case"--tailwind":console.log(tailwind),console.log("add tailwind ..."),tailwind=!0,console.log(tailwind)}}))}exports.cli=cli;