'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var defs = require('defs');

module.exports = function (options) {
  options = options ? options : {};

  return through.obj(function (file, enc, cb) {
    if (file.isNull()) {
      this.push(file);
      return cb();
    }

    if (file.isStream()) {
      this.emit('error', new gutil.PluginError('gulp-defs', 'Streaming not supported'));
      return cb();
    }

    try {
      file.contents = new Buffer(defs(file.contents.toString(), options).src);
    } catch (err) {
      this.emit('error', new gutil.PluginError('gulp-defs', err));
    }

    this.push(file);
    cb();
  });
};
