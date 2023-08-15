const fs = require("fs");
const {
    html,
    css,
    help
} = require("./exports");
let tailwind = false
function cli(args) {
    args.forEach(arg => {
        switch (arg){
            case "-site": 
            case "--create-site": 

                fs.mkdirSync("images", function(err) {
                    if (err) {
                        console.log("Zmat-cli: Error");
                    }
                    console.log('create images ...')
                });
                fs.mkdirSync("fonts", function(err) {
                    if (err) {
                        console.log("Zmat-cli: Error");
                    }
                    console.log('create fonts ...')
                });
                fs.mkdirSync("js", function(err) {
                    if (err) {
                        console.log("Zmat-cli: Error");
                    }
                    console.log('create js ...')
                });
                fs.writeFile('./js/index.js', '/* created by zmat-cli */', function(err) {
                    if (err) {
                        console.log("Zmat-cli: Error");
                    }
                    console.log('create index.js ...')
                });
                fs.mkdirSync("css", function(err) {
                    if (err) {
                        console.log("Zmat-cli: Error");
                    }
                    console.log('create css')
                });
                fs.writeFile('./css/style.css', css, function(err) {
                    if (err) {
                        console.log("Zmat-cli: Error");
                    }
                    console.log('create style.css')
                });
                fs.writeFile('./index.html', html, function(err) {
                    if (err) {
                        console.log("Zmat-cli: Error");
                    }
                    console.log('create index.html and link files')
                });
                break

            case "-v":
            case"--version" :
                console.log("Zmat-cli: 0.1.0 Version");break

            case "-h":
            case "--hlep":
                console.log(help);break
            
            case "-t":
            case "--tailwind":
                console.log(tailwind);
                console.log("add tailwind ...");
                tailwind = true ;
                console.log(tailwind);
                break

            default : console.log(help);break
        }
    })
} 

exports.cli = cli