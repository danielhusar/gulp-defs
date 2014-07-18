# [gulp](http://gulpjs.com)-defs [![Build Status](https://secure.travis-ci.org/danielhusar/gulp-defs.svg?branch=master)](http://travis-ci.org/danielhusar/gulp-defs) ![dependencies](https://david-dm.org/danielhusar/gulp-defs.png)

Gulp plugin for [defs](https://github.com/olov/defs)

See [defs](https://github.com/olov/defs) for documentation.

## Install

```bash
npm install --save-dev gulp-defs
```

## Example

```javascript
var gulp = require('gulp');
var defs = require('gulp-defs');

gulp.task('js', function () {
  gulp.src('./public/*.js')
  .pipe(defs(options))
  .pipe(gulp.dest('./public/'));
});

```

## options

same as [defs](https://github.com/olov/defs#configuration)


## License

MIT © [Daniel Husar](https://github.com/danielhusar)
