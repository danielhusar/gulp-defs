'use strict';
var assert = require('assert');
var gutil = require('gulp-util');
var defs = require('./index.js');

it('It should process data', function (cb) {
  var stream = defs();

  stream.on('data', function(file){
    assert.equal(file.contents.toString(), 'var x = 1');
    cb();
  });

  stream.write(new gutil.File({
    base: __dirname,
    path: __dirname + '/file.js',
    contents: new Buffer('const x = 1')
  }));

  stream.end();
});
