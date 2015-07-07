'use strict';

var pathConfig = module.exports;

/**
 * 样式目录配置
 * @type {{del: string[], dest: string, src: string[]}}
 */
pathConfig.css = {
    del:['./public/build/stylesheets/**', '!./public/build/stylesheets','!./public/build/stylesheets/.gitignore'],
    dest:'./public/build/stylesheets/',//样式输出目录
    watch:'./public/src/stylesheets/**',//监听记录
    src: ['./public/src/stylesheets/tmc-styles.less']//样式源码
};

/**
 * 脚本目录配置
 * @type {{del: string[], dest: string, src: string[]}}
 */
pathConfig.js = {
    del:['public/build/javascripts/**', '!public/build/javascripts','!public/build/javascripts/.gitignore'],
    dest:'public/build/javascripts/',//输出目录
    src: ['public/src/javascripts/**']//源码
};

/**
 * 模板目录配置
 * @type {{del: string[], dest: string, src: string[]}}
 */
pathConfig.ejs = {
    del:['tmc/views/**', '!tmc/views','!tmc/views/.gitignore'],//删除
    dest:'tmc/views/',//输出
    src: ['public/src/views/**']//源码
};

pathConfig.imgs = {
    del:['public/build/images/**', '!public/build/images','!public/build/images/.gitignore'],//删除
    dest:'public/build/images/',//输出
    src: ['public/build/images/**']//源码
};