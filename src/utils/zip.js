var file_system = require('fs');
var archiver = require('archiver');
var output = file_system.createWriteStream('reports.zip');
var archive = archiver('zip');

output.on('close', function () {
    console.log(archive.pointer() + ' total bytes');
    console.log('archiver has been finalized and the output file descriptor has closed.');
});

archive.on('error', function (err) {
    throw err;
});

archive.pipe(output);
archive.bulk([
    {
        expand: true,
        cwd: 'reports', //folder which you want to zip
        src: ["**/*"],
        dest: ''
    }
]);
archive.finalize();
