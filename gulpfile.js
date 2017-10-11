var gulp = require('gulp')
var connect = require('gulp-connect');   //浏览器自动刷新
var merge = require('merge-stream');     //在一个任务中使用多个文件来源
var del = require('del');    //编译时删除之前的编译内容。文件的删除
var webpack = require('webpack-stream');  //引入webpack
var changed = require('gulp-changed');  //仅仅传递更改过的文件

// Run webpack
gulp.task('webpack', function(){
  return gulp.src('src/main.js')
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest('build/js/'))
    .pipe(connect.reload());
});

// Run the webserver
gulp.task('webserver', function() {
  connect.server({
    livereload: true,
    root: 'build'
  });
});

// Copy index.html file
gulp.task('build.index', function(){
  return gulp.src('./src/index.html')
    .pipe(gulp.dest('./build'));
});


//gulp.task('clean', function (cb) {
//del([
//  //'build/report.csv',  可以指定多个地址
//  // 这里我们使用一个通配模式来匹配  文件夹中的所有东西。编译前删除上次编译的东西
//  'build/html/**/*',
//  // 我们不希望删掉这个文件，所以我们取反这个匹配模式
//  //  '!dist/mobile/deploy.json'
//], cb);
//});


//html
gulp.task('html', function () { 
    var html1 = gulp.src('./src/*.html')
      .pipe(gulp.dest('./build'))
      .pipe(connect.reload()); 
      
    var html2 = gulp.src('./src/html/*.html')
      .pipe(gulp.dest('./build/html'))
      .pipe(connect.reload()); 
 });
 
//这里只监听html的变更，其他的在webpack中开启watc

//css
gulp.task('css',function(){
  gulp.src('./src/css/*.css')
  .pipe(changed('./build/css'))
  .pipe(gulp.dest('./build/css'))
})

gulp.task('watch', function () { 
    gulp.watch('src/*.html', ['html']); //监听html文件变化
    gulp.watch('src/html/*.html', ['html']); 
    gulp.watch("src/css/*.css",['css'])
 })

// Default task
gulp.task('default', ['webpack', 'webserver', 'build.index','watch']);