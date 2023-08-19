const cdn = require('./cdns');

function GeneratorHtml(option){
    let bootstrap = "" ; 
    let tailwind = "" ; 
    let alpine = "" ; 

    if(option){
        if(option.tailwind){
            tailwind = `<script src='${cdn.tailwind}'></script> `  ; 
        }if(option.bootstrap){
            bootstrap = `<link rel="stylesheet" href='${cdn.bootstrap}'> ` ; 
        }if(option.alpine){
            alpine = `<script src='${cdn.alpine}'></script> ` ; 
        }

        let html = `<!-- created by zmat-cli -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">

    ${tailwind}
    ${bootstrap}
    ${alpine}
    
    <title> 24 </title>
</head>
<body>

    <h1>created by zmat-cli</h1>


</body>
<script src="js/script.js"></script>
</html>`

        return html

    }else{
        console.log("Some Error be Coon Fix");
    }
}

const css = 
`/* created by zmat-cli */
body{background-color:#3b3b3b;display:flex;justify-content:center;align-items:center;height:400px}h1{font-size:50px;color:#fff;text-shadow:5px 5px 5px #000;animation:2s infinite alternate zmat}@keyframes zmat{0%{transform:translateY(50px)}100%{transform:translateY(100px)}}
/* zmat-cli styles */

`

const help =` Zmat-cli: help

        -site : --create-site    : => make new project
        -v    : --version "      : => show Version
        -h    : --help "         : => show Help

        ** Use Cdb **
        cdn [options] -site

        / options /
        tailwind  => --tailwind  : -t
        bootstrap => --bootstrap : -b
        alpine    => --alpine    : -a
        `

const tailwindConfig = `/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
        theme: {
        extend: {},
    },
    plugins: [],
}
`

const tailwindInput = `@tailwind base;
@tailwind components;
@tailwind utilities;
`

module.exports = {css , help , tailwindConfig ,tailwindInput , GeneratorHtml } ;
