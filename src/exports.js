const cdn = require('./cdns');

function GeneratorHtml(option){
let bootstrap = false ;let tailwind = false ;let alpine = false ; 

    if(option){
        if(option.tailwind){
            tailwind = true ; 
        }if(option.bootstrap){
            bootstrap = true ; 
        }if(option.alpine){
            alpine = true ; 
        }
        let html = `<!-- created by zmat-cli -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title> 24 </title>
    ${tailwind && `<script src='${cdn.tailwind}'></script> ` }
    ${bootstrap &&  `<link rel="stylesheet" href='${cdn.bootstrap}'> `}
    ${alpine && `<script src='${cdn.alpine}'></script> `}
    
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
        -v    : --version        : => show Version
        -h    : --help           : => show Help
        -t    : --tailwind       : => configure and install tailwindcss
        
        ** Use Cdn **
        cdn [-options] -site

        / Options /
        Tailwind  => --tailwind  : -t  
        Bootstrap => --bootstrap : -b
        Alpine    => --Alpine    : -a
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