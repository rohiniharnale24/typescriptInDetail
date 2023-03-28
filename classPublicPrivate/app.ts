let cl = console.log;

//tsc --init
//we need comment only on developer org not in production org
// so we have to revome all commments that are saved in app.js
// we have to add RemoveComment in tscongi.json
//to see type script file in soucre we uncomment "sourceMap": true
//the file which we dont want to complile we put that file in "exclude":[]
//modules are the external dependancies like boostrap and typescript
//in module all function have written but we call that function in ts file
//so to exucute perticular code we use exclude
// we dont need to compile all modules file we want to compile the function which are present in our js n ts file
//"include">> the file which we want to complie

//browser dont understand sass it understand css
//pre-processor >> sass ,less,stylus

//src
//sass
//ts

//dist
//js
//css

//rootdir >> to set the path of current ts and css file
//outdir >> to set the path of js and css file

//interview questions 3rd round
//what tgis file do and which are the option available in this file
//package.json>>all external modules that required for project are stored in package.json
//tsconfig.json>>
//angular.json

//-g typescript will run all the terninals of your command
//
