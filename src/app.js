import arg from 'arg';
const { exec } = require("child_process");
function parse(rawArgs) {
const args = arg(
{
    "--create-site": Boolean,
    "--site"       : "--create-site",
    "--version"    : Boolean,
    "-v"           : "--version",
    "--help"    : Boolean,
    "-h"           : "--help",
},
    {
        argv: rawArgs.slice(2),
    }
);
return {
    site: args['--create-site'] || args['--site'] || false,
    version: args['--version'] || args['-v'] || false,
    help: args['--help'] || args['-h'] || false,
    
};
}

export function cli(args) {
    let options = parse(args);
    if(options.site){
        exec("mkdir js css images fonts", (error, stdout) => {
            if (error) {
                console.log(`Zmat-cli:: error: ${error.message}`);
                return;
            }
            console.log(`Zmat-cli: ${stdout || "created"}`);
        });
        exec("echo /* created by zmat-cli */ > css/style.css ", (error, stdout) => {
            if (error) {
                console.log(`Zmat-cli:: error: ${error.message}`);
                return;
            }
            console.log(`Zmat-cli: ${stdout || "created"}`);
        });
        exec("echo /* created by zmat-cli */ > js/script.js ", (error, stdout) => {
            if (error) {
                console.log(`Zmat-cli:: error: ${error.message}`);
                return;
            }
            console.log(`Zmat-cli: ${stdout || "created"}`);
        });
        exec(`echo ^<!-- Created By Zmat-cli --^> > index.html `, (error, stdout) => {
            if (error) {
                console.log(`Zmat-cli:: error: ${error.message}`);
                return;
            }
            console.log(`Zmat-cli: ${stdout || "created"}`);
        });
    }
    if(options.version){
        console.log("Zmat-cli: 0.0.3 Version");
    }
    if(options.help){
        console.log(`Zmat-cli: help

        -site : --create-site    : => make new project
        -v    : --version "      : => show Version
        -h    : --help "         : => show Help

        `);
    }
}