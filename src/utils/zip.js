// import jszip from 'jszip'
// var JSZip = require('jszip');
// var fileSaver = require('file-saver');

// var zip = new JSZip();

// zip.folder("logs");
// zip.generateAsync({ type: "uint8array" })
//   .then((uint8array) => {
//     saveAs(uint8array, "./logs.zip");
//   })
//   .then(() => {
//     console.log('zip successfully');
//   })
//   .catch((err) => {
//     console.log(err);
//   });

var file_system = require('fs');
var archiver = require('archiver');

var output = file_system.createWriteStream('logs.zip');
var archive = archiver('zip');

output.on('close', function () {
    console.log(archive.pointer() + ' total bytes');
    console.log('archiver has been finalized and the output file descriptor has closed.');
});

archive.on('error', function(err){
    throw err;
});

archive.pipe(output);
archive.bulk([
    { expand: true, 
      cwd: 'logs', //folder which you want to zip
      src: ["**/*"], 
      dest: ''
    }
]);
archive.finalize();