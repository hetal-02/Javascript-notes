//OS MODULE

// const os = require('os');

// const freeMemory = os.freemem();
// console.log(`${freeMemory / 1024 / 1024  / 1024}`);
// const totalMemory = os.totalmem();
// console.log(totalMemory/1024/1024/1024);

// console.log(`The uptime of system is ${os.uptime}seconds`);
// console.log(os.type());
// console.log(os.release());

// //PATH MODULE

// const path = require('path');
// console.log(path.sep);
// console.log(path.join);

// const filePath = path.join('/BACKEND','test.txt');
// console.log(filePath);

// const base = path.basename(filePath);
// console.log(base);

// //Method name is the basename;
// const absolute = path.resolve(__dirname,'BACKEND','test.txt');
// console.log(absolute);

//FILESYSTEM(FS) MODULE ===> Sync
// const {readFileSync, writeFileSync} = require('fs');

// const first = readFileSync('./BACKEND/first.txt','utf8')
// const second = readFileSync('./BACKEND/second.txt','utf8')

// console.log(first,second);

// const write = writeFileSync('./BACKEND/result-sync.txt',`Hello this is the result: ${first} ${second}`,{flag:'a'}); //flag:a will append both files to result

//Fs MODULE (Async)
const {readFile,writeFile} = require('fs');

readFile('./BACKEND/first.txt','utf8',(err,result) => {
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    readFile('./BACKEND/second.txt','utf8',(err,result) => {
        if(err){
            console.log(err);
            return;
        }
        const second = result;
    
    writeFile('./BACKEND/result-async.txt',`Here is the result: ${first} ,${second}`,(err,result) =>{
        if(err){
            console.log(err);
            return;
        }
        console.log(result);
    })
     })

})


