import arg from 'arg';const{exec}=require("child_process");const fs=require("fs");const{html,css}=require("./exports");function parse(rawArgs){const args=arg({"--create-site":Boolean,"--site":"--create-site","--version":Boolean,"-v":"--version","--help":Boolean,"-h":"--help"},{argv:rawArgs.slice(2)});return{site:args['--create-site']||args['--site']||false,version:args['--version']||args['-v']||false,help:args['--help']||args['-h']||false}}export function cli(args){let options=parse(args);if(options.site){fs.mkdirSync("images",function(err){if(err){throw err}console.log('create images ...')});fs.mkdirSync("fonts",function(err){if(err){throw err}console.log('Results Received')});fs.mkdirSync("js",function(err){if(err){throw err}console.log('Results Received')});fs.writeFile('./js/index.js','/* created by zmat-cli */',function(err){if(err){throw err}console.log('Results Received')});fs.mkdirSync("css",function(err){if(err){throw err}console.log('Results Received')});fs.writeFile('./css/style.css',css,function(err){if(err){throw err}console.log('Results Received')});fs.writeFile('./index.html',html,function(err){if(err){throw err}console.log('Results Received')})}if(options.version){console.log("Zmat-cli: 0.0.5 Version")}if(options.help){console.log(`Zmat-cli: help

        -site : --create-site    : => make new project
        -v    : --version "      : => show Version
        -h    : --help "         : => show Help

        `)}}
