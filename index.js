var Xray = require('x-ray');
var x = Xray();
var fs = require('fs');

x('https://github.com/TUNER88/iOSSystemSoundsLibrary', ['tr'])
.write('results.json')
