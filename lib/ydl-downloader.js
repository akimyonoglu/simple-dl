var execFile  = require('child_process').execFile;

var isDebug = /^\[debug\] /;
var isWarning = /^WARNING: /;

function downloader(url, callback) {
  execFile("youtube-dl", [url], "", function done(err, stdout, stderr) {
    console.log(stdout);
    if (isDebug.test(stderr)) {
      console.log('\n' + stderr);
    } else if (isWarning.test(stderr)) {
      console.warn(stderr);
    } else {
      return callback(new Error(stderr.slice(7)));
    }
  });
}

module.exports = downloader;
