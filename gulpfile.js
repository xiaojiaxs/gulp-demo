var gulp = require("gulp");//引入gulp
var htmlmin=require("gulp-htmlmin");//html文件压缩
var cssmin=require("gulp-clean-css");//css文件压缩
var concat=require("gulp-concat");//文件合并
var sass=require("gulp-sass");//编译sass
var rename=require("gulp-rename");//文件重命名
var uglify=require("gulp-uglify");//js文件压缩，混淆
var imagemin=require("gulp-imagemin");//图片文件压缩
var base64=require("gulp-base64");//图片转码
var inject=require("gulp-inject");//文件路径注入
var connect=require("gulp-connect");//webserver
//注释注释




gulp.task("css",function(){
	gulp.src(["./src/css/chanping.css","./src/css/swiper.min.css","./src/css/shouye.css","./src/css/guanyu.css","./src/css/zaixian.css","./src/css/xinwen.css","./src/css/liuyan.css","./src/css/jingdian.css","./src/css/lianxi.css"])
		.pipe(cssmin())
		.pipe(concat("all.css"))
		.pipe(base64())
		.pipe(gulp.dest("./dist/css"));
});
gulp.task("scss",function(){
	gulp.src("./src/sass/*.scss")
		.pipe(concat("all.scss"))
		.pipe(sass())
		.pipe(rename("all-scss.css"))
		.pipe(cssmin())
		.pipe(gulp.dest("./dist/css"));
});
gulp.task("js",function(){
	gulp.src(["./src/js/plugins/jquery.min.js","./src/js/plugins/swiper.min.js","./src/js/plugins/move.js","./src/js/main.js","./src/js/require.js"])
		.pipe(concat("all.js"))
		.pipe(uglify())
		.pipe(gulp.dest("./dist/js"));
});
gulp.task("image",function(){
	gulp.src("./src/img/**/*")
		.pipe(imagemin())
		.pipe(gulp.dest("./dist/img"));
});
gulp.task("html",["css","js"],function(){
	gulp.src("./src/html/**/*")	
		.pipe(gulp.dest("./dist/html"));
});
gulp.task("inject",["html"],function(){
	gulp.src("./dist/html/**/*")
		.pipe(inject(gulp.src(["./dist/css/all.css","./dist/js/all.js"]),{relative:true}))
		.pipe(gulp.dest("./dist/html"));
});
gulp.task("watch",function(){
	gulp.watch("./src/css/**/*",["css"]);
	gulp.watch("./src/js/**/*",["js"]);
	gulp.watch("./src/**/*.html",["inject"]);
});
gulp.task("connect",function(){
	connect.server({
		root:"dist"
	});
});
gulp.task("default",["image","inject","watch","connect"]);
