const cdn = require('./cdns');
// const app = require('./app');
const html = 
`<!-- created by zmat-cli -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title> 24 </title>
</head>
<body>


    <h1>created by zmat-cli</h1>


</body>
<script src="js/script.js"></script>
</html>`

const css = 
`/* created by zmat-cli */
body{background-color:#3b3b3b;display:flex;justify-content:center;align-items:center;height:400px}h1{font-size:50px;color:#fff;text-shadow:5px 5px 5px #000;animation:2s infinite alternate zmat}@keyframes zmat{0%{transform:translateY(50px)}100%{transform:translateY(100px)}}
/* zmat-cli styles */

`

const help =` Zmat-cli: help

        -site : --create-site    : => make new project
        -v    : --version "      : => show Version
        -h    : --help "         : => show Help
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
module.exports = {html , css , help , tailwindConfig ,tailwindInput} ;